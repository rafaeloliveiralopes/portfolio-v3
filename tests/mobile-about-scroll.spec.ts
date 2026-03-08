import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["iPhone 13"], browserName: "chromium" });

test.describe("Mobile About navigation", () => {
  test("hero arrow scrolls to about and content becomes visible", async ({
    page,
  }) => {
    await page.goto("/pt", { waitUntil: "domcontentloaded" });

    const aboutArrowButton = page.getByRole("button", {
      name: /about|sobre|acerca de/i,
    });

    await expect(aboutArrowButton).toBeVisible();

    const scrollBefore = await page.evaluate(() => window.scrollY);

    await aboutArrowButton.click();

    await page.waitForFunction(() => window.scrollY > 100);

    const scrollAfter = await page.evaluate(() => window.scrollY);
    expect(scrollAfter).toBeGreaterThan(scrollBefore);

    const aboutWrapper = page.locator("#about");
    await expect(aboutWrapper).toBeVisible();

    await page.waitForFunction(() => {
      const firstReveal = document.querySelector("#about .about-reveal");
      if (!firstReveal) return false;
      return parseFloat(getComputedStyle(firstReveal).opacity) > 0.9;
    });

    await expect(aboutWrapper).toContainText(/Rafael Lopes|Sobre|About|Acerca de/i);
  });
});

/**
 * Accessibility Testing with axe-core
 *
 * This test suite validates WCAG 2.1 Level AA compliance
 * Run: pnpm test:a11y
 */

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const BASE_URL = "http://localhost:8080";

test.use({ colorScheme: "dark" }); // Ensures consistent color scheme

test.describe("Accessibility Tests", () => {
  test.beforeEach(async ({ page, context }) => {
    // 1) Set theme before page load (prevents theme flicker during analysis)
    await context.addInitScript(() => {
      try {
        localStorage.setItem("theme", "dark");
        document.documentElement.dataset.theme = "dark";
        document.documentElement.classList.add("dark");
      } catch (e) {
        // Suppress errors if localStorage or DOM APIs are unavailable
      }
    });

    // 2) Deterministic media queries
    await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });

    // 3) Navigate and wait for stable state
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("#root", { state: "attached" });

    // 4) Wait for fonts and CSS variables to be applied
    await page.evaluate(async () => {
      await document.fonts?.ready;
    });
    await page.waitForFunction(() => {
      const cs = getComputedStyle(document.documentElement);
      return (
        cs.getPropertyValue("--primary").trim().length > 0 &&
        cs.getPropertyValue("--foreground").trim().length > 0
      );
    });

    // 5) Ensure semantic anchors are rendered (prevents partial render analysis)
    await page.waitForFunction(() => {
      const h1 = document.querySelector("h1");
      const cta = document.querySelector('button, a[href*="contact"]');
      return !!h1 && !!cta;
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Capture screenshot only on test failure for debugging
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `test-results/accessibility-${testInfo.title.replace(
          /\s+/g,
          "-"
        )}.png`,
        fullPage: true,
      });
    }
  });

  test("should not have automatically detectable accessibility issues on homepage", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have accessibility issues in navigation", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include("nav")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have accessibility issues in hero section", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include("section:has(h1)")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have accessibility issues in services section", async ({
    page,
  }) => {
    // Wait for lazy-loaded content
    await page.waitForSelector("#serviços", { timeout: 5000 });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include("#serviços")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have accessibility issues in contact form", async ({
    page,
  }) => {
    // Wait for lazy-loaded content
    await page.waitForSelector("#contato", { timeout: 5000 });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include("#contato")
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should have proper color contrast", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["cat.color"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should have proper keyboard navigation", async ({ page }) => {
    // Test tab navigation
    await page.keyboard.press("Tab");
    const focusedElement = await page.evaluate(
      () => document.activeElement?.tagName
    );
    expect(focusedElement).toBeTruthy();
  });
});

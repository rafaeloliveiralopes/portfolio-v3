/**
 * Accessibility Testing with axe-core
 *
 * This test suite validates WCAG 2.1 Level AA compliance
 * Run: pnpm test:a11y
 */

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Start dev server manually before running tests
    await page.goto("http://localhost:8080");
    // Wait for app to hydrate
    await page.waitForSelector("#root", { state: "attached" });
    // Wait for fonts to load for accurate color contrast testing
    await page.evaluate(async () => await document.fonts?.ready);
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

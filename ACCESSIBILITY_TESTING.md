# Accessibility Testing Guide

This project includes automated accessibility testing using **Playwright** and **axe-core** to ensure WCAG 2.1 Level AA compliance.

## Prerequisites

- Node.js >= 18.0.0
- pnpm (package manager)
- Chromium browser (automatically installed via Playwright)

## Test Suite Overview

The accessibility test suite (`tests/accessibility.spec.ts`) includes 8 comprehensive tests:

1. **Homepage Accessibility** - Scans entire page for WCAG violations
2. **Navigation Accessibility** - Validates navigation landmarks and links
3. **Hero Section Accessibility** - Checks main content area
4. **Services Section Accessibility** - Validates service cards and descriptions
5. **Contact Section Accessibility** - Tests form fields and labels
6. **Color Contrast** - Ensures 4.5:1 minimum contrast ratio
7. **Keyboard Navigation** - Verifies tab order and focus indicators
8. **Screen Reader Support** - Validates ARIA labels and semantic HTML

## Running Tests

### Standard Mode (Headless)

```bash
# Start dev server first
pnpm dev

# In another terminal, run tests
pnpm test:a11y
```

### UI Mode (Interactive)

```bash
# Start dev server
pnpm dev

# Run with Playwright UI
pnpm test:a11y:ui
```

This opens an interactive browser where you can:

- See tests run in real-time
- Inspect accessibility violations visually
- Debug specific test failures
- View detailed axe-core reports

### Debug Mode

```bash
# Start dev server
pnpm dev

# Run with debugging
pnpm test:a11y:debug
```

Use this mode to:

- Step through tests line by line
- Inspect page state during test execution
- Troubleshoot specific accessibility issues

## Understanding Results

### Passing Tests

```bash
✓ should not have automatically detectable accessibility issues on homepage
```

No violations detected. The component meets WCAG 2.1 AA standards.

### Failing Tests

```bash
✗ should not have automatically detectable accessibility issues on homepage

Expected: []
Received: [
  {
    id: 'color-contrast',
    impact: 'serious',
    description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
    nodes: [...]
  }
]
```

Each violation includes:

- **id**: axe-core rule identifier
- **impact**: severity level (critical, serious, moderate, minor)
- **description**: what the rule checks
- **nodes**: specific DOM elements with issues
- **help**: guidance on how to fix

## Common Fixes

### Color Contrast Issues

```tsx
// ❌ Bad (insufficient contrast)
<div className="text-gray-400 bg-gray-100">Text</div>

// ✅ Good (4.5:1+ contrast)
<div className="text-gray-700 bg-white">Text</div>
```

### Missing ARIA Labels

```tsx
// ❌ Bad
<button><Icon /></button>

// ✅ Good
<button aria-label="Close dialog"><Icon /></button>
```

### Form Accessibility

```tsx
// ❌ Bad
<input type="text" placeholder="Name" />

// ✅ Good
<label htmlFor="name">Name</label>
<input id="name" type="text" />
```

### Keyboard Navigation

```tsx
// ❌ Bad (div clickable but not keyboard accessible)
<div onClick={handler}>Click me</div>

// ✅ Good (button is inherently keyboard accessible)
<button onClick={handler}>Click me</button>
```

## CI/CD Integration

Add to `.github/workflows/ci.yml`:

```yaml
- name: Install dependencies
  run: pnpm install

- name: Install Playwright browsers
  run: pnpx playwright install chromium

- name: Start dev server
  run: pnpm dev &

- name: Wait for server
  run: npx wait-on http://localhost:8080

- name: Run accessibility tests
  run: pnpm test:a11y
```

## Best Practices

1. **Run tests locally before pushing** - Catch issues early
2. **Test on real devices** - Automated tests don't catch everything
3. **Use semantic HTML** - Proper elements reduce accessibility bugs
4. **Test with screen readers** - NVDA (Windows), VoiceOver (Mac)
5. **Check keyboard navigation manually** - Tab through entire page
6. **Maintain color contrast** - Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe-core Rule Descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Playwright Testing Docs](https://playwright.dev/docs/intro)
- [WebAIM Resources](https://webaim.org/resources/)

## Troubleshooting

### Server Not Running

```bash
Error: page.goto: net::ERR_CONNECTION_REFUSED
```

**Solution**: Start dev server first with `pnpm dev`

### Browser Not Installed

```bash
Error: Chromium browser not found
```

**Solution**: Run `pnpx playwright install chromium`

### Test Timeout

```bash
Error: Test timeout of 30000ms exceeded
```

**Solution**: Check if dev server is slow to start, or increase timeout in `playwright.config.ts`

---

**Compliance**: follows copilot-instructions.md preflight.

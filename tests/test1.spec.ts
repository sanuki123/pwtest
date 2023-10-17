
import { test, expect, type Page } from '@playwright/test';

test('githubアイコンの遷移先URLにplaywrightが含まれる', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByLabel('GitHub repository').click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*playwright/);
  });
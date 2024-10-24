import { test, expect } from '@playwright/test';

test.describe('Sample Website Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com');
    });

    test('should have the correct page title', async ({page}) => {
        await expect(page).toHaveTitle('Example Domain');
    });

    test('should display the main heading', async({page}) => {
        const heading = page.locator('h1');
        await expect(heading).toBeVisible();
    });

    test('should display the correct text on the button', async ({page}) => {
        const button = page.locator('a');
        await expect(button).toHaveText('More information...');
    });

    test('should take a screenshot on failure', async ({ page }) => {
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
    })
})
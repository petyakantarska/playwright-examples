import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch( { headless: false});
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');

    await page.click('button[type="submit"]');

    const successMessage = await page.locator('.flash.success').innerText();
    if (successMessage.includes('You logged into a secure area!')) {
        console.log('Test Passed: Login successful');
    } else {
        console.error('Test Failed: Login not successful');
    }

    await browser.close();
})();
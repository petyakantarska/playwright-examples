import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto('https://example.com');

    const title = await page.title();
    if (title !== 'Example Domain') {
        console.error('Test Failed: Title does not match');
    } else {
        console.log('Test passed: Title matches');
    }

    await browser.close();
})();
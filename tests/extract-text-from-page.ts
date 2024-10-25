import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto('https://en.wikipedia.org/wiki/Playwright');

    const headingText = await page.locator('#firstHeading').innerText();
    console.log('Heading:', headingText);

    await browser.close();
})();
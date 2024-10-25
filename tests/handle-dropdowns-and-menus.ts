import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch( { headless: false} );
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.selectOption('#dropdown', '2');

    const selectOption = await page.$eval('#dropdown', el => ( el as HTMLSelectElement).value);
    console.log('Selected option:', selectOption);

    await browser.close();
})();
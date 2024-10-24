import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();

    await page.goto('https://example.com');

    await page.screenshot({ path: 'homepage.png'});
    console.log('Screenshot taken: homepage.png');

    const headingText = await page.$eval('h1', element => element.textContent);
    console.log('Main heading is: ', headingText);

    await browser.close();
}) ();
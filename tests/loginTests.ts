import { chromium } from "playwright";

async function loginTest() {
    const browser = await chromium.launch( { headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.waitForSelector('.inventory_list');

    const url = page.url();
    if(url.includes('inventory.html')) {
        console.log('test passed: Login successful');
    } else {
        console.log('Test failed: Login unsuccessful');
    }

    await browser.close();
}

loginTest();
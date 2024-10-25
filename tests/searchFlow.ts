import { error } from "console";
import { chromium, Browser, Page  } from "playwright";

async function main() {
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage();

    await page.goto('https://www.duckduckgo.com', { waitUntil: 'load'});

    const query = 'програмиране';
    await page.fill('input[name="q"]', query);
    await page.keyboard.press('Enter');

    await page.waitForSelector('.results--main', {state: 'attached', timeout: 15000})

    await page.waitForSelector('.result__a', {timeout:15000});

    const results = await page.locator('.result__a');
    const textContents = await results.allInnerTexts();

    console.log('Retrieved text contents:', textContents);

    const containsKeyword = textContents.some((text) => 
        text.toLowerCase().includes(query.toLowerCase().trim()));

    if (containsKeyword) {
        console.log(`Test passed: Results contain the keyword: ${query}`);
    } else {
        console.error(`Test failed. No results contain the keyword: ${query}`);
    }

    await browser.close();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
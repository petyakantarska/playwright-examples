"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield playwright_1.chromium.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.goto('https://the-internet.herokuapp.com/login');
    yield page.fill('#username', 'tomsmith');
    yield page.fill('#password', 'SuperSecretPassword!');
    yield page.click('button[type="submit"]');
    const successMessage = yield page.locator('.flash.success').innerText();
    if (successMessage.includes('You logged into a secure area!')) {
        console.log('Test Passed: Login successful');
    }
    else {
        console.error('Test Failed: Login not successful');
    }
    yield browser.close();
}))();

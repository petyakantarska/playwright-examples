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
function loginTest() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield playwright_1.chromium.launch({ headless: false });
        const page = yield browser.newPage();
        yield page.goto('https://www.saucedemo.com/');
        yield page.fill('#user-name', 'standard_user');
        yield page.fill('#password', 'secret_sauce');
        yield page.click('#login-button');
        yield page.waitForSelector('.inventory_list');
        const url = page.url();
        if (url.includes('inventory.html')) {
            console.log('test passed: Login successful');
        }
        else {
            console.log('Test failed: Login unsuccessful');
        }
        yield browser.close();
    });
}
loginTest();

import { chromium } from "@playwright/test";

console.log("Starts")

const browser = await chromium.launch({headless: false});

console.log("Starts1")

const context = await browser.newContext();

console.log("Starts 2")

const page = await context.newPage();

console.log("Starts 3")

await page.goto("https://mail.yahoo.com/c/d/folders/1?reason=n8_norrin&.src=ym");

console.log("Starts 4")

await browser.close();
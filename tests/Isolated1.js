import { chromium } from "@playwright/test";

const browser = await chromium.launch({headless:false});

const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto("https://chatgpt.com/");

const context2 = await browser.newContext();
const page2 = await context2.newPage();
await page2.goto("https://claude.ai/");

//await browser.close();
import { chromium } from "@playwright/test";

const browser = await chromium.launch({headless:false});

const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto("https://chat.openai.com/");

const page2 = await context1.newPage();
await page2.goto("https://claude.ai/");        
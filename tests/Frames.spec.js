import {test, expect} from '@playwright/test';

test("IFrame Handling", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Frames");

    //const frame1 = page.frameLocator(".iframe").nth(0).locator("//input[@type='checkbox']").click();

    await page.frameLocator(".iframe").nth(0).getByRole('checkbox').click();

    await page.pause();
    
})

test("IFrame Handling1", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Frames");

    //const frame1 = page.frameLocator(".iframe").nth(0).locator("//input[@type='checkbox']").click();

    await page.frameLocator(".iframe").nth(1).getByText("Accept").click();

    await page.pause();
    
})
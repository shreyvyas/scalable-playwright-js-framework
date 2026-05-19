import {test, expect} from '@playwright/test';

//window handling

test("Window Handling", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Windows");

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText("Launch New Window").click()
    ])
    await newPage.waitForLoadState();

    console.log(await newPage.title());

    await newPage.close();

    await page.pause();

});
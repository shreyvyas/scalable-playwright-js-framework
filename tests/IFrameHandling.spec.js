import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");
    
})

test("IFrame Handling", async({page})=> {

    const frame = page.getByText("Frames");
    await frame.click();

    const frame1 = page.frameLocator(".iframe").nth(0)
                   .getByRole("button", {name: "Accept"});

    await frame1.click();


    await page.pause();
})


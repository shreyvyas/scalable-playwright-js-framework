import {test} from '@playwright/test';

test("Dropdown1 handling", async({page}) => {

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

    const dropdown1 = page.locator("#dropdowm-menu-1");
    await dropdown1.selectOption("Python");

    const dropdown2 = page.locator("#dropdowm-menu-2");
    await dropdown2.selectOption("Maven");

    await page.pause();

})

test("Handle Checkbox", async ({page}) => {
    
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

    const checkbox = page.getByRole("checkbox", {name: "Option 1"});
    await checkbox.click();

    await page.pause();

})

test("Handle Radio Button", async ({page}) => {
    
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

    const radiobutton = page.locator("//div[@id='checkboxes']/input");
    console.log(await radiobutton.allTextContents());
    //await radiobutton.click();

    await page.pause();

})
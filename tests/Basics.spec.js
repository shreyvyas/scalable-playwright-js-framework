import {test, expect} from '@playwright/test';

test("Check Page Title", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    const title = await page.title();

    console.log(title);

    await expect(page).toHaveTitle(title);
    
})

test("Handle Edit Box", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Edit").click();
    
    await page.getByPlaceholder("White").fill("Max and Joy");

    await page.pause();
})


test("Is Editable", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Edit").click();
    
    const isEditable = await page.getByPlaceholder("55");

    let result = await isEditable.isEditable();

    console.log(result);
    
})

test("Button Handling", async ({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Button").click();

    await page.getByText("Click this button").click();

    const text = await page.getByText("Thank you for clicking me.You may click the button below to bring me back.");

    console.log(await text.textContent());

    await expect(text).toBeVisible();
    
})


test("Handle Hyperlink", async ({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Hyperlink").click();

    //await page.getByText("Crio.do").click();

    //const isClickable = await page.getByText("Crio.do");

    const isClickable = await page.getByText("Crio.do");

    let result = await isClickable.isEnabled();

    console.log(result);

    await page.pause();

})

test("Check <a> tag", async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Hyperlink").click();

    const tagname = await page.getByText(" Non - Clickable ").evaluate(el => el.tagName);

    console.log(tagname);

    await expect(tagname).toBe("A");

})

test("Image", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Image").click();
    
})

test("Dropdown Handling", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Dropdown").click();

    const dropdown1 = page.locator(".Dropdown_section1 select.dropdown");

    await dropdown1.selectOption({value: "Greece"});
    
})

test("Multi Options Dropdown", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Dropdown").click();

    await page.getByRole('tab', {name: 'Multi Select Dropdown'}).click();

    const locator = page.locator(".DropdownMulti_section1 select.multi");

    await locator.selectOption(['Adobe InDesign', 'Adobe Photoshop']);
    
    await page.pause();
})

test("Handle Radio Button", async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Radio").click();

    await page.locator("//div[@class='RadioScreen_Container1']//input[@value='female']").click();

    await page.pause();
})

test("Handle Checkbox", async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Checkbox").click();

    // const chk1 = page.locator(".Checkbox_section1 div")
    //             .filter({hasText: 'QA'})
    //             .getByRole('checkbox');

    const chk1 = page.getByRole('checkbox', {name: 'QA'});

    await chk1.click();

    await page.pause();
})
import {test, expect} from '@playwright/test';
import testdata from '../testdata/testdata.json' assert { type: 'json' };

test('Locator Practice', async({page}) => {

    await page.goto("#");

    await page.locator("#splash-418175-close-button").click();

    //await page.getByRole('textbox', {name:'Username'}).fill("");

    await page.locator("#username").fill("testing");

    await page.locator("#password").fill("Test@001");

    await page.getByRole("button", {name: 'Login'}).click();

})

test('Sauce Lab Demo Login', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByRole('textbox', {name: 'Username'}).fill(testdata.username);

    await page.getByRole('textbox', {name:'Password'}).fill(testdata.password);

    await page.getByRole('button', {name: 'Login'}).click();

})

test('print price', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByRole('textbox', {name: 'Username'}).fill(testdata.username);

    await page.getByRole('textbox', {name:'Password'}).fill(testdata.password);

    await page.getByRole('button', {name: 'Login'}).click();

    const allTshirtNames = page.locator(".inventory_item_name ");

    console.log(await allTshirtNames.allTextContents());

    const allText = await allTshirtNames.allInnerTexts();

    for(let tshirt of allText){
        console.log(tshirt);
    }

})


test("Add to Cart", async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByRole('textbox', {name: 'Username'}).fill(testdata.username);

    await page.getByRole('textbox', {name:'Password'}).fill(testdata.password);

    await page.getByRole('button', {name: 'Login'}).click();

    const allItems = page.locator(".inventory_item_description")
                    .filter({hasText: testdata.tshirtName});

    const addToCart = allItems.getByRole('button', {name: "Add to cart"});
    await addToCart.click();

})
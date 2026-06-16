import {test, expect} from '@playwright/test';

test('Locator Practice', async({page}) => {

    await page.goto("#");

    await page.locator("#splash-418175-close-button").click();

    //await page.getByRole('textbox', {name:'Username'}).fill("");

    await page.locator("#username").fill("testing");

    await page.locator("#password").fill("Test@001");

    await page.getByRole("button", {name: 'Login'}).click();

    await page.pause();

})

test.only('Sauce Lab Demo Login', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByRole('textbox', {name: 'Username'}).fill("test");

    await page.getByRole('textbox', {name:'Password'}).fill("Test");

    await page.getByRole('button', {name: 'Login'}).click();

    await page.pause();

})
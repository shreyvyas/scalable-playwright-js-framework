import {test, expect} from '@playwright/test';
import { assert } from 'node:console';

test('title assert tobe', async({page})=> {

    await page.goto("https://www.google.com/");

    const title = await page.title();
    console.log(title);

    expect(title).toBe("Google");

})

test('title assert page assertions', async ({page}) => {
    
     await page.goto("https://www.google.com/");

     const title = await page.title();

     console.log(title);

     await expect(page).toHaveTitle(title);

})
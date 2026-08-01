import {test, expect} from '@playwright/test';

//waitForURL

test('Test Wait For URL', async ({page}) => {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");
    
    const loginBtn = page.getByRole('button', {name: 'Login'});

    await loginBtn.click();

    await page.waitForURL("https://crio-qkart-frontend-qa.vercel.app/login");

    await page.getByPlaceholder("Enter Username").fill("testq23");

    await page.getByPlaceholder("Enter a password").fill("Enter a password");

    await page.pause();

})

test('Test Wait For Load State', async ({page}) => {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");
    
    const loginBtn = page.getByRole('button', {name: 'Login'});

    await page.waitForLoadState('load');

    await loginBtn.click();

    await page.waitForURL("https://crio-qkart-frontend-qa.vercel.app/login");

    await page.getByPlaceholder("Enter Username").fill("testq23");

    await page.getByPlaceholder("Enter a password").fill("Enter a password");

    await page.pause();

})

test('Test Wait For Dom Content Loaded', async ({page}) => {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");
    
    const loginBtn = page.getByRole('button', {name: 'Login'});

    await page.waitForLoadState('domcontentloaded');

    await loginBtn.click();

    await page.waitForURL("https://crio-qkart-frontend-qa.vercel.app/login");

    await page.getByPlaceholder("Enter Username").fill("testq23");

    await page.getByPlaceholder("Enter a password").fill("Enter a password");

    await page.pause();

})
import {test} from '@playwright/test';

test.beforeEach(async({page}) => {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const loginBtn = page.getByRole("button", {name: "Login"});
    await loginBtn.click();

    const enterUsername = page.getByPlaceholder("Enter Username");
    await enterUsername.fill("shreyvyas");

    const enterPassword = page.getByPlaceholder("Enter a password");
    await enterPassword.fill("test123");

    const loginQkart = page.getByRole("button", {name: "Login to QKart"});
    await loginQkart.click();

})

export {test};
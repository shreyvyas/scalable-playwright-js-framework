import {test as base} from '@playwright/test';

const test = base.extend({

    loggedInPage: async({page}, use)=> {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const loginBtn = page.getByRole("button", {name: "Login"});
    await loginBtn.click();

    const enterUsername = page.getByPlaceholder("Enter Username");
    await enterUsername.fill("shreyvyas");

    const enterPassword = page.getByPlaceholder("Enter a password");
    await enterPassword.fill("test123");

    const loginQkart = page.getByRole("button", {name: "Login to QKart"});
    await loginQkart.click();
    
    await use(loggedInPage);

    }   
});

export {test};
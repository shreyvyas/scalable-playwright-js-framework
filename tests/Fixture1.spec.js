import {test, expect} from '@playwright/test';

test("first test", async({page})=> {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const loginBtn = page.getByRole("button", {name: "Login"});
    await loginBtn.click();

    const enterUsername = page.getByPlaceholder("Enter Username");
    await enterUsername.fill("shreyvyas");

    const enterPassword = page.getByPlaceholder("Enter a password");
    await enterPassword.fill("test123");

    const loginQkart = page.getByRole("button", {name: "Login to QKart"});
    await loginQkart.click();

    await page.getByRole('textbox', { name: 'Search for items/categories' }).fill("Shoes");

})

//helper function
async function login(page){

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const loginBtn = page.getByRole("button", {name: "Login"});
    await loginBtn.click();

    const enterUsername = page.getByPlaceholder("Enter Username");
    await enterUsername.fill("shreyvyas");

    const enterPassword = page.getByPlaceholder("Enter a password");
    await enterPassword.fill("test123");

    const loginQkart = page.getByRole("button", {name: "Login to QKart"});
    await loginQkart.click();

}

//test using helper
test("Test Using Helper Function", async({page}) => {

    await login(page);

    await page.getByRole('textbox', { name: 'Search for items/categories' }).fill("Watch");

})
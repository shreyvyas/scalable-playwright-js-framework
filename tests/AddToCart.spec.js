import {test, expect} from '@playwright/test';

test.only("Add to cart test", async ({page}) => {

    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const registerBtn = page.getByRole("button", {name: "Register"});
    await page.waitForLoadState('domcontentloaded');
    await registerBtn.click();

    await page.waitForURL("https://crio-qkart-frontend-qa.vercel.app/register");

    const username = `user_${crypto.randomUUID().replace(/-/g, '').slice(0, 8)}`;
    console.log(username);

    const enterUserName = page.getByPlaceholder("Enter Username");
    await enterUserName.fill(username);
    const enterPassword = page.getByPlaceholder("Enter a password with minimum 6 characters");
    await enterPassword.fill("test123");
    const confirmPassword = page.getByPlaceholder("Re-enter your password to confirm");
    await confirmPassword.fill("test123");
    const registerNow = page.getByRole("button", {name: "Register Now"});
    await registerNow.click();

    await page.waitForURL("https://crio-qkart-frontend-qa.vercel.app/login");

    await page.getByRole("textbox", {name: "username"}).fill(username);
    await page.getByRole("textbox", {name: "password"}).fill("test123");
    await page.getByRole("button", {name: "Login to QKart"}).click();

    await page.pause();
    
})
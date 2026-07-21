import {test, expect} from '@playwright/test'

//Alert Handling
//browser alerts are javascript popups like: 
//alert(), confirm(), prompt()

//playwright handles alerts using event listener:
//accept(), dismiss(), type(), message()

test("Alert Accept", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Alerts").click();

    page.on('dialog', async (dialog)=> {
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.getByText("Show Alert").click();
    
})

test("Alert Dismiss", async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Alerts").click();

    page.on('dialog', async (dialog)=> {

        await dialog.dismiss();

    })

    await page.getByText("Show Agreement").click();
})

test("Send text to alert", async ({page}) => {
    
    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Alerts").click();

    page.on('dialog', async (dialog)=> {
    console.log(dialog.message());
    await dialog.accept("Max and Joy");
    })

    await page.getByText("Add Remarks").click();

})

//page.on - event listener method
//dialog - event
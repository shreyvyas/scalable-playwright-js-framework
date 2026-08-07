import {test} from '../Fixtures/login-fixture';
import {expect} from '@playwright/test';

test("custom fixture", async({page, loggedInPage})=> {

    await page.getByRole('textbox', { name: 'Search for items/categories' }).fill("Watch");

})


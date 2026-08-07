import {test} from '../base/BaseTest';
import {expect} from '@playwright/test';

test("Using Base Test", async({page}) => {

     await page.getByRole('textbox', { name: 'Search for items/categories' }).fill("Watch");

})   
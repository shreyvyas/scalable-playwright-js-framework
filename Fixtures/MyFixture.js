import {test as base} from '@playwright/test';

const test = base.extend({

    message: async({}, use) => {

        await use("hello");

    }

});

export {test};
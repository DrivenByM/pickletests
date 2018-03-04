// features/step_definitions/admin.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    Given(/^I login to test admin$/, () => {
        return client
            .url('https://testadmin.meteorapp.com/')
            .pause(2000)
            .waitForElementVisible('body', 1000);
    });
    Then(/^I click on login button$/, () => {
        return client.click('#app > main > div > section > div > div > a > div')
        .pause(2000)
    });
    // Then(/^I am"([^"]*)"$/, (title) => {
    //     return client.assert.title(title);
    // });
    Then(/^I login as operator$/, () => {
        return client
        .setValue('input[name="email"]','operator@drivenbym.com')
        .setValue('input[name="password"]','test1234')
        .click('button[type="submit"] > div > div')
        .pause(3000)
        .waitForElementVisible('body',1000);
    });
    Then(/^the Google search form exists$/, () => {
        return client.assert.visible('input[name="q"]');
    });

});

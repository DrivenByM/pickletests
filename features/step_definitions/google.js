// features/step_definitions/google.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When,}) => {
    Given(/^I open Google's search page$/, () => {
        return client
            .url('http://google.com')
            .pause(5000)
            .waitForElementVisible('body', 1000);
    });

    Then(/^the title is "([^"]*)"$/, (title) => {
        return client.assert.title(title);
    });

    Then(/^the Google search form exists$/, () => {
        return client.assert.visible('input[name="q"]');
    });

});
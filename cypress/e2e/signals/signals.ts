import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let initialSignalCount = 0;

Then('I should see the signals title {string}', (title: string) => {
  cy.contains(title).should('be.visible');
});

Then('I should see the signals count badge', () => {
  cy.contains('Signals')
    .closest('[class*="MuiBox-root"]')
    .find('.MuiChip-root')
    .should('be.visible');
});

Then('I should see signal rows with person names and descriptions', () => {
  cy.contains('Robert Smith').should('be.visible');
  cy.contains('changed role from').should('exist');
});

Then('signal rows should display tags like {string} or {string}', (tag1: string, tag2: string) => {
  cy.contains(tag1).should('exist');
  cy.contains(tag2).should('exist');
});

When('I click the {string} button on a signal row', (buttonText: string) => {
  cy.contains('button', buttonText).first().click();
});

Then('I should see a popover with {string} and {string} options', (opt1: string, opt2: string) => {
  cy.get('.MuiPopover-root').should('be.visible');
  cy.get('.MuiPopover-root').contains(opt1).should('be.visible');
  cy.get('.MuiPopover-root').contains(opt2).should('be.visible');
});

Then('I note the number of signal rows', () => {
  cy.contains('Signals')
    .closest('.MuiCard-root')
    .find('.MuiAvatar-root')
    .its('length')
    .then((count) => {
      initialSignalCount = count;
    });
});

Then('I click {string} in the popover', (action: string) => {
  cy.get('.MuiPopover-root').contains(action).click();
});

Then('the signal should be removed from the list', () => {
  cy.contains('Signals')
    .closest('.MuiCard-root')
    .find('.MuiAvatar-root')
    .should('have.length.lt', initialSignalCount);
});

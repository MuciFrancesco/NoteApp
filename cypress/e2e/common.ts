import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the dashboard', () => {
  cy.visit('/');
  cy.waitForApp();
});

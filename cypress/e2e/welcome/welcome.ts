import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see the greeting {string}', (greeting: string) => {
  cy.contains(greeting).should('be.visible');
});

Then('I should see the welcome description text', () => {
  cy.contains("Here's your performance overview").should('be.visible');
});

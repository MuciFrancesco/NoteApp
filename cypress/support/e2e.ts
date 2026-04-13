/// <reference types="cypress" />

Cypress.Commands.add('waitForApp', () => {
  cy.get('.MuiCard-root', { timeout: 15000 }).should('have.length.gte', 1);
});

declare global {
  namespace Cypress {
    interface Chainable {
      waitForApp(): Chainable<void>;
    }
  }
}

export {};

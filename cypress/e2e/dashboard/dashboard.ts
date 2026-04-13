import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see the welcome card', () => {
  cy.contains('Welcome Alex,').should('be.visible');
});

Then('I should see the replies card', () => {
  cy.contains('Replies').should('be.visible');
});

Then('I should see the performance card', () => {
  cy.contains("May's performance").should('be.visible');
});

Then('I should see the today tasks card', () => {
  cy.contains("Today's tasks").should('be.visible');
});

Then('I should see the signals card', () => {
  cy.contains('Signals').should('be.visible');
});

Then('I should see the onboarding card', () => {
  cy.contains('Onboarding').should('be.visible');
});

Then('I should see skeleton loaders initially', () => {
  // Reload without waiting for app to catch skeletons
  cy.visit('/');
  cy.get('.MuiSkeleton-root').should('have.length.gte', 1);
});

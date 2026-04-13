import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('the replies card should show the count {string}', (count: string) => {
  cy.get('[data-key-number]').contains(count).should('be.visible');
});

Then('I should see the {string} link in the replies card', (linkText: string) => {
  cy.contains(linkText).should('be.visible');
});

Then('I should see user avatars in the replies card', () => {
  cy.get('.MuiAvatarGroup-root').should('be.visible');
  cy.get('.MuiAvatarGroup-root .MuiAvatar-root').should('have.length.gte', 3);
});

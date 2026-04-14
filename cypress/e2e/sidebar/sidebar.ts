import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see the sidebar with the crono logo', () => {
  cy.get('.MuiDrawer-root').should('be.visible');
  cy.get('.MuiDrawer-root').find('img[alt="Crono"]').should('be.visible');
});

Then('I should see the following menu items:', (table: { rawTable: string[][] }) => {
  const items = table.rawTable.slice(1).map((row) => row[0]);
  items.forEach((item) => {
    cy.get('.MuiDrawer-root').contains(item).should('exist');
  });
});

Then('the {string} menu item should be active', (item: string) => {
  cy.get('.MuiDrawer-root')
    .contains(item)
    .closest('.MuiListItemButton-root')
    .should('have.css', 'background-color')
    .and('not.equal', 'rgba(0, 0, 0, 0)');
});

Then('the inbox menu item should show a badge with {string}', (count: string) => {
  cy.get('.MuiDrawer-root')
    .contains('Inbox')
    .closest('.MuiListItemButton-root')
    .contains(count)
    .should('be.visible');
});

Then('I should see the trial banner with upgrade button', () => {
  cy.get('.MuiDrawer-root').contains('Trial ends in').should('be.visible');
  cy.get('.MuiDrawer-root').contains('Upgrade plan').should('be.visible');
});

Then('I should see the user name {string}', (name: string) => {
  cy.get('.MuiDrawer-root').contains(name).should('be.visible');
});

When('I click the sidebar toggle button', () => {
  cy.get('.MuiDrawer-root').find('[data-testid="MenuOpenIcon"]').click();
});

Then('the sidebar should be hidden', () => {
  cy.get('.MuiDrawer-paper').should('not.be.visible');
});

When('I click the floating menu button', () => {
  cy.get('[data-testid="MenuIcon"]').click();
});

Then('the sidebar should be visible', () => {
  cy.get('.MuiDrawer-paper').should('be.visible');
});

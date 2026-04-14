import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see {string} as the tasks title', (title: string) => {
  cy.contains(title).should('be.visible');
});

Then('I should see the following task cards:', (table: { rawTable: string[][] }) => {
  const rows = table.rawTable.slice(1);
  rows.forEach(([label, count]) => {
    cy.contains(label).should('be.visible');
    cy.contains(label)
      .closest('[class*="MuiBox-root"]')
      .parent()
      .find('[data-key-number]')
      .should('contain.text', count);
  });
});

Then('the {string} task card should show an error badge', (label: string) => {
  cy.contains(label)
    .closest('[class*="MuiBox-root"]')
    .parent()
    .find('[data-testid="WarningIcon"]')
    .should('exist');
});

Then('I should see a divider between pending and completed tasks', () => {
  cy.contains("Today's tasks")
    .closest('.MuiCard-root')
    .find('.MuiDivider-root')
    .should('exist');
});

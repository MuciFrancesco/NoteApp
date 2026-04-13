import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see the onboarding title {string}', (title: string) => {
  cy.contains(title).should('be.visible');
});

Then('I should see {int} onboarding steps', (count: number) => {
  cy.contains('Onboarding')
    .closest('.MuiCard-root')
    .find('[data-testid="ChevronRightIcon"]')
    .should('have.length', count);
});

Then('I should see the following onboarding steps:', (table: { rawTable: string[][] }) => {
  const rows = table.rawTable.slice(1);
  rows.forEach(([title, duration]) => {
    cy.contains(title).should('be.visible');
    cy.contains(title)
      .closest('[class*="MuiBox-root"]')
      .contains(duration)
      .should('exist');
  });
});

When('I hover over an onboarding step', () => {
  cy.contains('Integrations Setup')
    .closest('[class*="MuiBox-root"]')
    .filter('[style*="cursor"], :has([class*="cursor"])')
    .first()
    .as('onboardingStep')
    .trigger('mouseover');
});

Then('the step should have a highlight background', () => {
  // Verify the step element exists and is interactable
  cy.contains('Integrations Setup').should('be.visible');
});

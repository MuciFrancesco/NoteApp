import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I should see {string} as the performance title', (title: string) => {
  cy.contains(title).should('be.visible');
});

Then('I should see the {string} link', (linkText: string) => {
  cy.contains(linkText).should('be.visible');
});

Then('I should see {int} KPI cards in the performance section', (count: number) => {
  cy.contains("May's performance")
    .closest('.MuiCard-root')
    .find('.MuiLinearProgress-root')
    .should('have.length', count);
});

Then('the {string} KPI should display {string}', (kpiName: string, value: string) => {
  cy.contains(kpiName)
    .closest('[class*="MuiBox-root"]')
    .parent()
    .contains(value.replace('/', '/'))
    .should('exist');
});

Then('each KPI card should have a progress bar', () => {
  cy.contains("May's performance")
    .closest('.MuiCard-root')
    .find('.MuiLinearProgress-root')
    .should('have.length', 6);
});

When('I hover over a KPI card', () => {
  cy.contains("May's performance")
    .closest('.MuiCard-root')
    .find('.MuiLinearProgress-root')
    .first()
    .closest('[class*="MuiBox-root"]')
    .parents('[class*="MuiBox-root"]')
    .filter(':has([data-testid="kpi-info-btn"])')
    .first()
    .as('kpiCard')
    .trigger('mouseover');
});

When('I click the info button', () => {
  cy.get('@kpiCard').find('[data-testid="kpi-info-btn"]').click({ force: true });
});

Then('the KPI detail modal should open', () => {
  cy.get('.MuiDialog-root').should('be.visible');
});

Then('the modal should show a progress bar', () => {
  cy.get('.MuiDialog-root').find('.MuiLinearProgress-root').should('be.visible');
});

Then('the modal should show a breakdown section', () => {
  cy.get('.MuiDialog-root .MuiDialogContent-root')
    .find('[class*="MuiBox-root"]')
    .should('have.length.gte', 3);
});

When('I close the KPI detail modal', () => {
  cy.get('.MuiDialog-root').find('[data-testid="CloseIcon"]').click();
});

Then('the KPI detail modal should not be visible', () => {
  cy.get('.MuiDialog-root').should('not.exist');
});

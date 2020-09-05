import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.loadData(['courses', 'lessons']);
});

Given(`I have opened the application`, () => {
  cy.visit('/');
});

Then(`I should be on the home page`, () => {
  cy.checkLocation(`/`);
});
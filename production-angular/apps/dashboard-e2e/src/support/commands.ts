// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    loadData(models: string[]): void;
    checkLocation(path: string): void;
    getEntities(model: string): void;
    createEntity(model: string, mock: any): void;
    updateEntity(model: string, mock: any): void;
    deleteEntity(model: string, mock: any): void;
    addEntity(model: string, mock: any): void;
  }
}

const API_URL = Cypress.env('apiUrl');
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('checkLocation', (route) => {
  cy.location('pathname').should('equal', route);
});

Cypress.Commands.add('loadData', (models: string[]) => {
  models.forEach(model => cy.getEntities(model));
});

Cypress.Commands.add('getEntities', (model) => {
  cy.server();
  cy.route('GET', `${API_URL}/${model}`, `fixture:${model}`);
});

Cypress.Commands.add('createEntity', (model, entity) => {
  cy.server();
  cy.route('POST', `${API_URL}/${model}`, { entity });
  cy.addEntity(model, entity);
});

Cypress.Commands.add('updateEntity', (model, entity) => {
  cy.server();
  cy.route('PUT', `${API_URL}/${model}/${entity.id}`, { entity });
  cy.addEntity(model, entity);
});

Cypress.Commands.add('deleteEntity', (model, entity) => {
  cy.server();
  cy.route('DELETE', `${API_URL}/${model}/${entity.id}`, { entity });
  cy.getEntities(model);
});

Cypress.Commands.add('addEntity', (model, mock) => {
  cy.server();
  cy.fixture(model).then(collection => {
    cy.route('GET', `${API_URL}/${model}`, [...collection, mock]).as(model);
  });
});

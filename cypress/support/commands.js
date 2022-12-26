// ***********************************************
 import {locators} from '../locators'
 Cypress.Commands.add('login', (email, password) => {
    cy.get(locators.login.email).type(email)
    cy.get(locators.login.password).type(password)
    cy.get(locators.login.loginBtn).click()
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
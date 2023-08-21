/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// create steps for completing a step of the form
Cypress.Commands.add('completePersonalInfoStep', () => {
  cy.get('[data-testid="nameInput"]').find('input').type('Test Name')
  cy.get('[data-testid="emailInput"]').find('input').type('testmeail@gmail.com')
  cy.get('[data-testid="phoneNumberInput"]').find('input').type('1234567890')
  cy.get('[data-testid="nextButton"]').click()
})

Cypress.Commands.add('completePlanStep', () => {
  cy.get('[data-testid="proPlanInput"]').find('input').click()
  cy.get('[data-testid="nextButton"]').click()
})

Cypress.Commands.add('completeAddOnsStep', () => {
  cy.get('[data-testid="onlineServiceInput"]').find('input').click()
  cy.get('[data-testid="largerStorageInput"]').find('input').click()
  cy.get('[data-testid="customProfileInput"]').find('input').click()
  cy.get('[data-testid="nextButton"]').click()
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      completePersonalInfoStep(): Chainable<void>
      completePlanStep(): Chainable<void>
      completeAddOnsStep(): Chainable<void>
    }
  }
}

export {}

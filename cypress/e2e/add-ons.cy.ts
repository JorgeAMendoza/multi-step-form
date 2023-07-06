/// <reference types="cypress" />

describe('Add-ons form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    // personal info step
    cy.completePersonalInfoStep()
    // arcade plan, montly subscription
    cy.completePlanStep()

    cy.get('[data-test="add-ons"]').as('add-ons')
    cy.get('[data-test="formSteps"]').as('formSteps')
    cy.get('[data-test="nextButton"]').as('nextButton')
    cy.get('[data-test="onlineServiceInput"]').as('onlineServiceInput')
    cy.get('[data-test="largerStorageInput"]').as('largerStorageInput')
    cy.get('[data-testid="customProfileInput"]').as('customProfileInput')
  })

  it('no options should be selected, should be able to proceed', () => {
    cy.get('@onlineServiceInput').should('not.be.checked')
    cy.get('@largerStorageInput').should('not.be.checked')
    cy.get('@customProfileInput').should('not.be.checked')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'ADD-ONS')

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@add-ons').should('not.exist')
  })

  it('should be able to select all options and proceed', () => {
    cy.get('@onlineServiceInput').click()
    cy.get('@onlineServiceInput').should('be.checked')

    cy.get('@largerStorageInput').click()
    cy.get('@largerStorageInput').should('be.checked')

    cy.get('@customProfileInput').click()
    cy.get('@customProfileInput').should('be.checked')

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@add-ons').should('not.exist')
  })

  it('should be able to deselect an option', () => {
    cy.get('@onlineServiceInput').click()
    cy.get('@onlineServiceInput').should('be.checked')

    cy.get('@onlineServiceInput').click()
    cy.get('@onlineServiceInput').should('not.be.checked')
  })

  it('should be able to move foward but go back and see same options selected', () => {
    cy.get('@onlineServiceInput').click()
    cy.get('@onlineServiceInput').should('be.checked')

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@add-ons').should('not.exist')

    cy.get('[data-testid="previousButton"]').click()
    cy.get('@add-ons').should('exist')
    cy.get('@onlineServiceInput').should('be.checked')
    cy.get('@largerStorageInput').should('not.be.checked')
    cy.get('@customProfileInput').should('not.be.checked')
  })
})

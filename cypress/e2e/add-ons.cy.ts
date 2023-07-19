/// <reference types="cypress" />

describe('Add-ons form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    // personal info step
    cy.completePersonalInfoStep()
    // arcade plan, montly subscription
    cy.completePlanStep()

    cy.get('[data-testid="addOns"]').as('addOns')
    cy.get('[data-testid="formSteps"]').as('formSteps')
    cy.get('[data-testid="nextButton"]').as('nextButton')
    cy.get('[data-testid="onlineServiceInput"]').as('onlineServiceInput')
    cy.get('[data-testid="largerStorageInput"]').as('largerStorageInput')
    cy.get('[data-testid="customProfileInput"]').as('customProfileInput')
  })

  it('no options should be selected, should be able to proceed', () => {
    cy.get('@onlineServiceInput').find('input').should('not.be.checked')
    cy.get('@largerStorageInput').find('input').should('not.be.checked')
    cy.get('@customProfileInput').find('input').should('not.be.checked')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'Add-Ons')

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to select all options and proceed', () => {
    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('be.checked')

    cy.get('@largerStorageInput').find('input').click()
    cy.get('@largerStorageInput').find('input').should('be.checked')

    cy.get('@customProfileInput').find('input').click()
    cy.get('@customProfileInput').find('input').should('be.checked')

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to proceed with no selections', () => {
    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')
  })

  it('should be able to deselect an option', () => {
    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('be.checked')

    cy.get('@onlineServiceInput').find('input').click()
    cy.get('@onlineServiceInput').find('input').should('not.be.checked')
  })

  it('should be able to move foward and go back and see same options selected', () => {
    cy.get('@onlineServiceInput').find('input').click()

    cy.get('@nextButton').click()
    cy.get('[data-testid="confirmation"]').should('exist')
    cy.get('@addOns').should('not.exist')

    cy.get('[data-testid="previousButton"]').click()
    // component re-rendered, need to re-select elements
    cy.get('[data-testid="addOns"]').should('exist')
    cy.get('[data-testid="onlineServiceInput"]')
      .find('input')
      .should('be.checked')
    cy.get('[data-testid="largerStorageInput"]')
      .find('input')
      .should('not.be.checked')
    cy.get('[data-testid="customProfileInput"]')
      .find('input')
      .should('not.be.checked')
  })
})

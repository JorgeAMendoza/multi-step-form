/// <reference types="cypress" />

describe('Select a plan form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.completePersonalInfoStep()
    cy.get('[data-test="selectPlan"]').as('selectPlan')
    cy.get('[data-test="arcadePlanInput"]').as('arcadePlan')
    cy.get('[data-test="advancedPlanInput"]').as('advancedPlan')
    cy.get('[data-test="proPlanInput"]').as('proPlan')
    cy.get('[data-test="montlySubInput"]').as('montlySub')
    cy.get('[data-test="yearlySubInput"]').as('yearlySub')
    cy.get('[data-test="nextButton"]').as('nextButton')
  })

  it('default plan of arcade and montly subscription should be selected', () => {
    cy.get('@aracePlan').should('be.checked')
    cy.get('@montlySub').should('be.checked')
  })

  it('should be able to select advanced plan', () => {
    cy.get('@advancedPlan').click()
    cy.get('@advancedPlan').should('be.checked')

    cy.get('@arcadePlan').should('not.be.checked')
  })

  it('should be able to select pro plan', () => {
    cy.get('@proPlan').click()
    cy.get('@proPlan').should('be.checked')

    cy.get('@arcadePlan').should('not.be.checked')
  })

  it('should be able to select yearly subscription', () => {
    cy.get('@yearlySub').click()
    cy.get('@yearlySub').should('be.checked')

    cy.get('@montlySub').should('not.be.checked')
  })

  it('should be able to move to next step with default values', () => {
    cy.get('@nextButton').click()

    cy.get('@selectPlan').should('not.exist')
    cy.get('[data-test="add-ons"]').should('exist')
  })

  it('should be able to move to next step with pro plan and yearly subscriptoin selected', () => {
    cy.get('@proPlan').click()
    cy.get('@yearlySub').click()
    cy.get('@nextButton').click()

    cy.get('@selectPlan').should('not.exist')
    cy.get('[data-test="add-ons"]').should('exist')
  })
})

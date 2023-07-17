/// <reference types="cypress" />

// Personal info form section, grab all the label/inputs, confirm that we are on the right step, check for validation errors, and when valid, we move onto the next step "Select a plan"
describe('Personal info form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="personalInfo"]').as('personalInfo')
    cy.get('[data-testid="formSteps"]').as('formSteps')
    cy.get('[data-testid="nameInput"]').as('nameInput')
    cy.get('[data-testid="emailInput"]').as('emailInput')
    cy.get('[data-testid="phoneNumberInput"]').as('phoneNumberInput')
    cy.get('[data-testid="nextButton"]').as('nextButton')
    cy.get('h2').as('formStepTitle')
  })

  it('should be on the personal info step by default', () => {
    cy.get('@formStepTitle').should('contain.text', 'Personal Info')
    cy.get('@personalInfo').should('exist')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'Your Info')
  })

  it('name input should be required', () => {
    cy.get('@nameInput').find('input').focus()
    cy.get('@emailInput').find('input').focus()
    cy.get('@nextButton').click()
    cy.get('@nameInput')
      .find('span')
      .should('contain', 'This field is required')
  })

  it('email input should be required', () => {
    cy.get('@emailInput').find('input').focus()
    cy.get('@nextButton').click()
    cy.get('@emailInput')
      .find('span')
      .should('contain.text', 'This field is required')
  })

  it('email input should be valid', () => {
    cy.get('@emailInput').find('input').type('testemail.com')
    cy.get('@nextButton').click()
    cy.get('@emailInput')
      .find('span')
      .should('contain.text', 'Valid email required')
  })

  it('phone input should be required', () => {
    cy.get('@phoneNumberInput').find('input').focus()
    cy.get('@nextButton').click()
    cy.get('@phoneNumberInput')
      .find('span')
      .should('contain.text', 'This field is required')
  })

  it('phone input should be valid', () => {
    cy.get('@phoneNumberInput').find('input').type('123')
    cy.get('@nextButton').click()
    cy.get('@phoneNumberInput')
      .find('span')
      .should('contain.text', 'Valid phone number required')
  })

  it('should move to the next step when valid', () => {
    cy.get('@nameInput').find('input').type('test')
    cy.get('@emailInput').find('input').type('testemail@gmai.com')
    cy.get('@phoneNumberInput').find('input').type('1234567890')
    cy.get('@nextButton').click()
    cy.get('@formStepTitle').should('contain', 'Select your plan')
    cy.get('@personalInfo').should('not.exist')
  })

  it.only('should be able to leave page and come back with the same data in the form', () => {
    cy.get('@nameInput').find('input').type('test')
    cy.get('@emailInput').find('input').type('testemail@gmail.com')
    cy.get('@phoneNumberInput').find('input').type('1234567890')
    cy.get('@nextButton').click()

    cy.get('@personalInfo').should('not.exist')
    cy.get('[data-testid="previousButton"]').click()
    cy.get('@personalInfo').should('exist')

    cy.get('@nameInput').find('input').should('have.value', 'test')
    cy.get('@emailInput')
      .find('input')
      .should('have.value', 'testemail@gmail.com')
    cy.get('@phoneNumberInput').find('input').should('have.value', '1234567890')
  })
})

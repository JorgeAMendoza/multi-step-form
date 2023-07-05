/// <reference types="cypress" />

// Personal info form section, grab all the label/inputs, confirm that we are on the right step, check for validation errors, and when valid, we move onto the next step "Select a plan"
describe('Personal info form section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="personalInfo"]').as('personalInfo')
    cy.get('[data-test="formSteps"]').as('formSteps')
    cy.get('[data-test="nameInput"]').as('nameInput')
    cy.get('[data-test="emailInput"]').as('emailInput')
    cy.get('[data-test="phoneInput"]').as('phoneInput')
    cy.get('[data-test="nextButton"]').as('nextButton')
    cy.get('h2').as('formStepTitle')
  })

  it('should be on the personal info step by default', () => {
    cy.get('@formStepTitle').should('contain', 'Personal Info')
    cy.get('@personalInfo').should('exist')

    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'YOUR INFO')
  })

  it('name input should be required', () => {
    cy.get('@nameInput').should('have.attr', 'required')
    cy.get('@nameInput').focus()
    cy.get('@emailInput').focus()
    cy.get('@nameInput')
      .find('span')
      .should('contain', 'This field is required')
  })

  it('email input should be required', () => {
    cy.get('@emailInput').should('have.attr', 'required').focus()
    cy.get('@nameInput').focus()
    cy.get('@emailInput')
      .find('span')
      .should('contain.text', 'This field is required')
  })

  it('email input should be valid', () => {
    cy.get('@emailInput').type('testemail.com')
    cy.get('@nameInput').focus()
    cy.get('@emailInput')
      .find('span')
      .should('contain.text', 'Valid email required')
  })

  it('phone input should be required', () => {
    cy.get('@phoneInput').should('have.attr', 'required').focus()
    cy.get('@nameInput').focus()
    cy.get('@phoneInput')
      .find('span')
      .should('contain.text', 'This field is required')
  })

  it('phone input should be valid', () => {
    cy.get('@phoneInput').type('123')
    cy.get('@nameInput').focus()
    cy.get('@phoneInput')
      .find('span')
      .should('contain.text', 'Valid phone number required')
  })

  it('empty inputs should be marked as invalid if skipped', () => {
    cy.get('@nextButton').click()
    cy.get('@nameInput')
      .find('span')
      .should('contain', 'This field is required')
    cy.get('@emailInput')
      .find('span')
      .should('contain.text', 'This field is required')
    cy.get('@phoneInput')
      .find('span')
      .should('contain.text', 'This field is required')
  })

  it('should move to the next step when valid', () => {
    cy.get('@nameInput').type('test')
    cy.get('@emailInput').type('testemail@gmai.com')
    cy.get('@phoneInput').type('1234567890')
    cy.get('@nextButton').click()
    cy.get('@formStepTitle').should('contain', 'Select your plan')
    cy.get('@personalInfo').should('not.exist')
  })
})

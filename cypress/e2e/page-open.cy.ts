/// <reference types="cypress" />

describe('Page Open', () => {
  it('should open the page', () => {
    cy.visit('http://localhost:3000')
  })
})

/// <reference types="cypress" />

describe('Confirmation page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    // personal info step
    cy.completePersonalInfoStep()
    // arcade plan, montly subscription
    cy.completePlanStep()
    // online service, larger storage, custom profile
    cy.completeAddOnsStep()

    cy.get('[data-testid="confirmation"]').as('confirmation')
    cy.get('[data-testid="formSteps"]').as('formSteps')
    cy.get('[data-testid="confirmButton"]').as('confirmButton')
    cy.get('[data-testid="planInformation"]').as('planInformation')
    cy.get('[data-testid="addOnInformation"]').as('addOnsInformation')
    cy.get('[data-testid="total"]').as('total')
    cy.get('[data-testid="previousButton"]').as('previousButton')
  })

  it('previously selected options and total should be displayed', () => {
    cy.get('@formSteps')
      .find('[data-active="true"]')
      .should('contain', 'Summary')
    cy.get('@planInformation').should('contain', 'pro')
    cy.get('@planInformation').should('contain', '$15/mo')
    cy.get('[data-testid="onlineServicePrice"]').should(
      'contain.text',
      'Online Service +$1/mo'
    )
    cy.get('@addOnsInformation').should('contain', 'Larger Storage')
    cy.get('[data-testid="largerStoragePrice"]').should(
      'contain.text',
      '+$2/mo'
    )
    cy.get('@addOnsInformation').should('contain', 'Custom Profile')
    cy.get('[data-testid="customProfilePrice"]').should(
      'contain.text',
      '+$2/mo'
    )
    cy.get('@total').should('contain', 'Total (per month)')
    cy.get('@total').should('contain', '+$20/mo')
  })

  it('should be able to go back to plan step and change plan', () => {
    cy.get('@planInformation').find('button').click()
    cy.get('[data-testid="selectPlan"]').should('exist')

    cy.get('[data-testid="arcadePlanInput"]').find('input').click()
    cy.get('[data-testid="yearlySubInput"]').find('input').click()

    cy.get('[data-testid="nextButton"]').click()
    cy.get('[data-testid="nextButton"]').click()

    cy.get('@planInformation').should('contain', 'arcade (yearly)')
    cy.get('@planInformation').should('contain', '$90/yr')
    cy.get('@addOnsInformation').should('contain', 'Online Service')
    cy.get('[data-testid="onlineServicePrice"]').should(
      'contain.text',
      '+$10/yr'
    )

    cy.get('@addOnsInformation').should('contain', 'Larger Storage')
    cy.get('[data-testid="customProfilePrice"]').should(
      'contain.text',
      '+$20/yr'
    )
    cy.get('@addOnsInformation').should('contain', 'Custom Profile')
    cy.get('[data-testid="customProfilePrice"]').should(
      'contain.text',
      '+$20/yr'
    )
    cy.get('@total').should('contain', 'Total (per year)')
    cy.get('@total').should('contain', '+$140/yr')
  })

  it('should be able to go back and remove an add-on', () => {
    cy.get('@previousButton').click()
    cy.get('[data-testid="customProfileInput"]').click()
    cy.get('[data-testid="customProfileInput"]').should('not.be.checked')

    cy.get('[data-testid="nextButton"]').click()

    cy.get('@confirmation').should('exist')
    cy.get('@planInformation').should('contain', 'pro (monthly)')
    cy.get('@planInformation').should('contain', '$15/mo')
    cy.get('@addOnsInformation').should('contain', 'Online Service')
    cy.get('[data-testid="onlineServicePrice"]').should(
      'contain.text',
      '+$1/mo'
    )
    cy.get('@addOnsInformation').should('contain', 'Larger Storage')
    cy.get('[data-testid="largerStoragePrice"]').should(
      'contain.text',
      '+$2/mo'
    )

    cy.get('@addOnsInformation').should('not.contain', 'Custom Profile')
    cy.get('@total').should('contain', 'Total (per month)')
    cy.get('@total').should('contain', '+$18/mo')
  })

  it('should be able to confirm and see "thank you" message', () => {
    cy.get('@confirmButton').click()
    cy.get('@confirmation').should('not.exist')
    cy.get('[data-testid="thankYouMessage"]').should('exist')
    cy.get('h2').should('contain.text', 'Thank you!')

    cy.get('p').should(
      'contain.text',
      'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
    )
  })
})

//const { assert, expect } = require("chai")

describe('spec 3', () => {
  it('India', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('Indonesia', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('China', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })
})
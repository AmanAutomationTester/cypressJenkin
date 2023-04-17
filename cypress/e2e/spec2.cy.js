describe('Verify spec 2', () => {
  it('nightwatch', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('Verify javascript', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('Verify typescript', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })
})
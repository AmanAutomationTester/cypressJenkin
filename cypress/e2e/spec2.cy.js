describe('Verify spec 2', () => {
  it('nightwatch', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('javascript', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('typescript', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })
})
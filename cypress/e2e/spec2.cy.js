describe('Verify spec 2', () => {
  it('nightwatch', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('flaky2', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  }) 
})
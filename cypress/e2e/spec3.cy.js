describe('spec 3', () => {
  it('Verify India', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('Verify Indonesia', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('Verify China', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })
})
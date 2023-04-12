describe('spec 1', () => {

  it('selenium', () => {

    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('java', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('eclipse', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })
})
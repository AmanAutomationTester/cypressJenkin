describe('spec 1', () => {

  it('selenium', () => {
    cy.visit("https://www.selenium.dev/")
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('java', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('eclipse', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })
})
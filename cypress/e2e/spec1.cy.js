describe('Verify spec 1', () => {

  it('selenium', () => {
    // cy.visit("https://www.selenium.dev/")
    cy.contains("Selenium WebDriver").should('not.exist')
  })

  it('flaky1', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })

  it('eclipse', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })
})
describe('spec 1', () => {
  it('Verify selenium', () => {
    cy.visit("https://www.selenium.dev/")
    cy.contains("Selenium WebDriver").should('not.exist')
  })

  it('Verify java', () => {
    cy.contains("Sorry, something went wrong").should('exist')
  })

  it('Verify eclipse', () => {
    cy.contains("Sorry, something went wrong").should('not.exist')
  })
})
describe('spec 4', () => {
    it('Verify Tea', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  
    it('Verify Coffee', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  
    it('Verify Juice', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  })
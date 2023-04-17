describe('spec 4', () => {
    it('Tea', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  
    it('Coffee', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  
    it('Juice', () => {
      cy.contains("Sorry, something went wrong").should('not.exist')
    })
  })
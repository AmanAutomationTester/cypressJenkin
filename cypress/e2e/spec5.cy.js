describe('Verify spec 5', () => {
    it('School', () => {
      cy.contains("Sorry, something went wrong").should('exist')
    })
  
    it('University', () => {
      cy.contains("Sorry, something went wrong").should('exist')
    })
  
    it('Office', () => {
      cy.contains("Sorry, something went wrong").should('exist')
    })
  })
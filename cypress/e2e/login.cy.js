describe('login', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('login with valid credentials', () => {
        cy.login('irina.karanovic@gmail.com', 'BakicaVukica')
        cy.url().should('include', 'my-organizations')
    });
      
});
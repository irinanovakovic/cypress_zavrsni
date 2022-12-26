describe('board page',() => {
    before(() => {
        cy.visit('/login')
        cy.login('irina.karanovic@gmail.com','BakicaVukica')
        cy.wait(4000)
        it('Add board',()=> {
            cy.visit('/my-organizations')
        })
    })
})
import{locators} from "../locators"
describe('board page',() => {
    before(() => {
        cy.visit('/login')
        cy.login('irina.karanovic@gmail.com','BakicaVukica')
        cy.wait(4000)
       
    })
    it('Add board',()=> {
        cy.visit('/my-organizations')
        cy.get(locators.board.addNewBoard).click()
        cy.get(locators.board.inputTitle).type('my test board')
        cy.get(locators.board.nextBtn).click()
        cy.get(locators.board.kanabaOption).click()
        cy.get(locators.board.nextBtn).click()
        cy.get(locators.board.nextBtn).click()
        cy.get(locators.board.nextBtn).click()
        cy.get(locators.board.finishBtn).click()

    })
})
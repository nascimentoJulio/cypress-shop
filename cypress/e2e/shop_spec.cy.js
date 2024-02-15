describe('Shop tests', () => {
    it('Should find a xss injection', () => {
        cy.visit('http://127.0.0.1:5500/cypress-shop/shop/index.html')

        cy.get('input[name="search-input"]').type('<input name="cypress-test-xss"/>')
        cy.get('button[name="search-button"]').click()
        cy.get('input[name="cypress-test-xss"]').should('exist')
    });
})
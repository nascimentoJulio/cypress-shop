describe('Login function tests', () => {
  it('Should do login with success', () => {
    cy.visit('http://127.0.0.1:5500/cypress-shop/login/index.html')

    cy.get('input[name="email"]').type('mor_2314')
    cy.get('input[name="password"]').type('83r5^_')
    cy.get('button[name="button_login"]').click()

    cy.url().should('include', '/shop/index.html')
  })

  it('Should do login with error', () => {
    cy.visit('http://127.0.0.1:5500/cypress-shop/login/index.html')

    cy.get('input[name="email"]').type('foo')
    cy.get('input[name="password"]').type('bar')
    cy.get('button[name="button_login"]').click()

    cy.on('window:alert', (str) => {
      expect('username or password is incorrect').to.equal(str)
    })
  })
})
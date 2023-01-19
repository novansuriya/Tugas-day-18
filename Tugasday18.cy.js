describe('test login', () => {
  it('login success', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('tomsmith')
    cy.wait(3000)

    cy.get('#password')
    .type('SuperSecretPassword!')
    cy.wait(3000)

    cy.get('.radius')
    .click()
    cy.url().should('include', '/secure')
    cy.wait(10000)
  })

  it('logout success', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('tomsmith')
    cy.wait(3000)

    cy.get('#password')
    .type('SuperSecretPassword!')
    cy.wait(3000)

    cy.get('.radius')
    .click()
    cy.wait(3000)

    cy.get('.button')
    .click()
    cy.url().should('include', '/login')
    cy.wait(10000)
  })

  it('login failed wrong username and password', () =>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username')
    .type('dfasdfa')
    cy.wait(3000)

    cy.get('#password').type('fadfasdfas!')
    cy.wait(3000)
    
    cy.get('.radius')
    .click()

    cy.get('#flash')
    .should('be.visible')
    cy.wait(10000)
  })

  it('login failed username blank', () =>{
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#password').type('fadfasdfas!')
    cy.wait(3000)
      
    cy.get('.radius')
    .click()

    cy.get('#flash')
    .should('be.visible')
    cy.wait(10000)
  })

  it('login failed password blank', () =>{
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#password').type('fadfasdfas!')
    cy.wait(3000)
      
    cy.get('.radius')
    .click()

    cy.get('#flash')
    .should('be.visible')
    cy.wait(10000)
  })
})

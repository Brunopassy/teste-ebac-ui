/// <reference types="cypress"/>

context(`Funcionalidade Login`, () =>{

it(`Deve fazer login com sucesso`, () => {
cy.visit(`http://lojaebac.ebaconline.art.br/my-account/`)
cy.get('#username').type(`aluno_ebac@teste.com`)
cy.get('#password').type(`teste@teste.com`)
cy.get('.woocommerce-form > .button').click()

cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should(`contain`, `Logout`)

})

it(`Deve exibir uma mensagem de erro ao inserir usuarios invalidos`, () =>{

cy.visit(`http://lojaebac.ebaconline.art.br/my-account/`)
cy.get('#username').type(`aluno_eba@teste.com`)
cy.get('#password').type(`teste@teste.com`)
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-error > li').should(`contain`, `desconhecido`) 
    
})

it(`Deve exibir uma mensagem de erro ao inserir senhas invalidas`, () =>{

    cy.visit(`http://lojaebac.ebaconline.art.br/my-account/`)
    cy.get('#username').type(`aluno_ebac@teste.com`)
    cy.get('#password').type(`teste@teste1.com`)
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-error > li').should(`contain`, `Perdeu a senha?`)
    
        
    })

})
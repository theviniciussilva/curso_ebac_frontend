/// <reference types="cypress" />

describe('Agenda Suit', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar o h1 da home ', () => {
        
        cy.get('h1').should('have.length', 1)
    })
    it('Cadastrar contato', () => {
        cy.get('input[type="text"]').type('Vinicius Silva')
        cy.get('input[type="email"]').type('vinicius.silva_01@outlook.com')
        cy.get('input[type="tel"]').type('11987614377')
        cy.get('.adicionar').click()
    })
    it('Editar contato', () => {
        // cy.get('.edit').click() caso o fecth não funcione
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Vinicius Alves')
        cy.get('[type="email"]').type('vinicius.silva_01@hotmail.com')
        cy.get('[type="tel"]').type('11123456789')
        cy.get('.alterar').click()
    })
    it('Deletar contato', () =>{
        // cy.get('.delete').click() caso o fecth não funcione
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})
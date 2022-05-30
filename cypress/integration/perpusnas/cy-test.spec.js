/// <reference types="cypress" />

describe('Test Auth', () => {
    it('Login', () => {
        let username = 'adminpusat'
        let password = '123'
        cy.visit('https://perpusnas.akhdani.net/login');

        // // Input username
        // cy.contains('Email / NPP')
        //     .parent()
        //     .find('input[name=username]')
        //     .type(`${username}{enter}`)

        // // Input Password
        // cy.contains('Kata Sandi')
        //     .parent()
        //     .find('input[name=password]')
        //     .type(`${password}`)

        // // Click Login
        // cy.get('button.btn-primary').click()

        // Check if success login
        cy.contains('Login Aplikasi').should('not.exist')

    })

    // it('Register', ()=> {
    //     cy.visit('https://perpusnas.akhdani.net/register')
    // })
})


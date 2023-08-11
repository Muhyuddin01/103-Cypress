/// <reference types="cypress"/>


describe('Test the website',  () => {
    it('LogELD Login case', () => {
        cy.visit('https://www.way2automation.com/angularjs-protractor/registeration/#/login')
        cy.title().should('eq', 'Protractor practice website - Registration')

        cy.xpath('//*[@name="username"]').type('angular');
        cy.xpath('//*[@type="password"]').type('password');
        cy.xpath('//*[@ng-model="model[options.key]"]').type('angular');

        cy.xpath('//*[@ng-click="Auth.login()"]').click();
        cy.get('h1.ng-scope').should('contain', 'Home')

    })
})





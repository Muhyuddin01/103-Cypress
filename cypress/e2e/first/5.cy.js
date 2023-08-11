/// <reference types="cypress" />


describe('Test the website', () => {
    it('LogELD Login case', () => {
        cy.visit('https://practice.automationbro.com/');

        /*         //pop up Alert
                cy.xpath('//input[@id= "alertbtn"]').click();
                cy.on("window:alert", (str) => {
        
                    expect(str).to.eq("Hello , share this practice page and share your knowledge");
                }) */



        //pop up Confirm
        // cy.xpath('//input[@id= "confirmbtn"]').click();
        // cy.on("window:confirm", (str1) => {

        //     expect(str1).to.eq("Hello , Are you sure you want to confirm?");
        // })




/*       //Tab opening on new | 1st way | using removing the target

        cy.xpath('//a[@id= "contact-us"]').invoke("removeAttr", "target").click();
        cy.url().should('include', 'practice')
        cy.go('back'); */


        //Tab opening on new | 2ns way | using pop function

        cy.xpath('//a[@id= "contact-us"]').then(function(data){

        const tabdata = data.prop('href');
        cy.url().should('include', 'practice')
        cy.go('back');
        })





    })
})





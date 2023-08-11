/// <reference types="cypress"/>


describe('Test the website', () => {
    it('LogELD Login case', () => {
        cy.visit('https://xevenskills.com/user-account/');

        cy.xpath('//*[@name="login"]').type('username');

        cy.xpath('//*[@name="email"]').type('mical1@test.com');

        cy.xpath('//*[@name="password"]').type('Abc12345^');

        cy.xpath('//*[@name="password_re"]').type('Abc12345^');

        cy.xpath('//*[@type="tel"]').type('03214852369');

        cy.xpath('//label[@class="heading_font" and text() = "Qualifications"]/parent::div/input').type('Qualifications');

        cy.xpath('//label[@class="heading_font" and text() = "Date of Birth"]/parent::div/input').type('01-01-2001');





        cy.xpath('//select[@class="form-control disable-select"]').select('Male'); // Select the desired option by its value



        cy.xpath('//label[@class="heading_font" and text() = "Province"]/parent::div/input').type('Province');

        cy.xpath('//label[@class="heading_font" and text() = "City"]/parent::div/input').type('City');


        cy.xpath('//label[@class="heading_font" and text() = "Address"]/parent::div/input').type('Test Address');


        cy.xpath('//button[@class="btn btn-default register-btn"]').click();

        cy.get('.stm-lms-message').should('contain', 'Please follow the instructions')


    })
})





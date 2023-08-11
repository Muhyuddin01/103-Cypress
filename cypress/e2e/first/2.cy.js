/// <reference types="cypress"/>


describe('Test the website',  () => {
    it('LogELD Login case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        

/*         cy.xpath('//*[@id="checkBoxOption1"]').click().should('be.checked').and('have.value', 'option1')
        cy.xpath('//*[@id="checkBoxOption2"]').click().should('be.checked').and('have.value', 'option2')
        cy.xpath('//*[@id="checkBoxOption3"]').click().should('be.checked').and('have.value', 'option3')

        cy.get("input[type='checkbox']").check(['option1','option3']).should('be.checked');
        cy.xpath('//*[@id="checkBoxOption1"]').uncheck().should('not.be.checked'); */
       


        //dropdown
        // cy.get('select').select('option1').should('have.value', 'option1');

        cy.xpath('//div[@id="checkbox-example"]')



        
        //dynamic dropdown
/*         cy.get('#autocomplete').type('bri');
        cy.get('.ui-menu-item-wrapper').each((St1)=>{
            console.log(St1.text());
            cy.log(St1.text());

            if(St1.text() == "British Indian Ocean Territory")
            {
                cy.wrap (St1).click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'British Indian Ocean Territory'); */



        //radio button
        // cy.xpath('//*[@value="radio2"]').check().should('be.checked').and('have.value','radio2')
   



    })
})





/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('Test the website', () => {
    it('LogELD Login case', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');


/* 
        //working with iframe using iframe plugin
                cy.frameLoaded('#mce_0_ifr');  //load the frame
        
                cy.iframe('#mce_0_ifr').clear().type('Hello!!! {ctrl+a}' );

                cy.get("[aria-label='Bold']").click(); */



/*         //another way
        const iframe = cy.xpath('//iframe[@id = "mce_0_ifr"]')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);


            iframe.clear().type('Hello pakistan!!!'); */





            //Web table




    })
})





describe('Sessions spec', () => {
    it('add session', () => {
        cy.login('yoga@studio.com','test!1234');
        cy.get('.ml1').click();
        cy.url().should('include','/create');
        cy.get('input[formControlName=name]').type("yoga");
        cy.get('input[formControlName=date]').type('2009-12-12');
        cy.get('#teacher').click();
        cy.get('mat-select').each(function($element,index,list){
            if($element.text()==="DELAHAYE Margot") {
                cy.wrap($element).click();
            }else{
                cy.log("still searching");
                
            }
        })
        //cy.get('input[formControlName=teacher_id]').select(0).invoke("val").should("eq", "DELAHAYE Margot");
        cy.get('input[formControlName=description]').type("yoga");
        cy.get('button').click();
    })
})
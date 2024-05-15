describe('Assertions', () => {
    it ('assertions implicitas', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //should, and
        //cy.url().should('include', 'orangehrmlive')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contains', 'opensource')

        // cy.url().should('include', 'orangehrmlive')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contains', 'opensource')

        cy.url().should('include', 'orangehrmlive')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contains', 'opensource')

        //Title
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')

        //links
        cy.xpath('//a').should('have.length', '5')

        //Logo
        cy.get('.orangehrm-login-logo > img').should('be.visible')
        .and('exist')

        //Verificar se o valor está sendo digitado corretamente
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Username"]').should('have.value', 'Admin')
       
    })
})
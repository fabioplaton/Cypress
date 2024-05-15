describe ('CSSLocator' , () => {
   
    beforeEach ('Login válido', () => {
        //visitar a pagina 
        cy.visit('https://www.saucedemo.com/v1/index.html')

        //Preencher o campo username
        cy.get('input#user-name').type('standard_user')

        //Preencher o campo password 
        cy.get('input[placeholder="Password"]').type('secret_sauce')

        //Clicar no botão login
        cy.get('input.btn_action').click()
    })
    
    it ('Estou na página correta', () => {
        //Verificar se esta na pagina certa
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div').contains('Products')
    })

    it ('Adicionar um item ao carrinho', () => {
        //add to cart
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    
    })

})
describe('Click Count Button', () => {

  it('Loads page successfully', () => {

    cy.env(['url']).then(({ url }) => {
      cy.visit(url);
    })

    for(let i = 0; i <= 10; i++) {
      cy.get('button') 
        .should('be.visible')
        .should('have.text', `count is ${i}`)
        .click();
    }

  })
})

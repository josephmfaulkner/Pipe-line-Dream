describe('Click Second Link', () => {

  it('Click Second Link', () => {

    cy.env(['url']).then(({ url }) => {
      cy.visit(url);
    })

    cy.get('a').eq(1).invoke('removeAttr', 'target').click();

  })
  
})

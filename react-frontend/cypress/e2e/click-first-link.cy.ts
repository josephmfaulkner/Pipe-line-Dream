describe('Click First Link', () => {

  it('Click First Link', () => {

    cy.env(['url']).then(({ url }) => {
      cy.visit(url);
    })

    cy.get('a').eq(0).invoke('removeAttr', 'target').click();

  })
  
})

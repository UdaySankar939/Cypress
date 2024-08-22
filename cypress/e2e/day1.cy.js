


// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })



describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io') //visit used to visit the page with url
    cy.contains('type').click()  // contain to track the elements

  })
})
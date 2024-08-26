describe.only('template spec', () => {
  it('LinkedIn', () => {
    cy.visit('https://www.linkedin.com/mynetwork/grow/');
    cy.get('#username').type("udaysankar20001112@gmail.com");
    cy.get('#password').type("Uday1211@");
    cy.get("button[aria-label='Sign in']").click();
    cy.title().should('eq',' Feed | LinkedIn');
    cy.wait(5000);
  })
})


// describe('LinkedIn Profile', () => {
//     it('name', () => {
//         cy.visit('https://www.linkedin.com/login')
//         cy.get('[name="session_key"]').type('ece1821@cemk.ac.in')
//         cy.get('[name="session_password"]').type('Tina@4500')
//         cy.get('.btn__primary--large').click()
//         cy.wait(5000)
   
//         //cy.get('div[class="t-16 t-black t-bold"]').should('contain', 'Welcome, SAYANI!')
//         cy.contains('SAYANI')
//     })
 
//   })

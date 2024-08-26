// Assertions Examples

// Example 1


// describe("assertions",()=>{

//   it("using should",()=>{
//       cy.visit("https://www.saucedemo.com/v1/");
//       // checking the url includes the given word
//       cy.url().should('include',"saucedemo");
//       // cheking the url is same or not by giving eq keyword
//       cy.url().should('eq',"https://www.saucedemo.com/v1/");
//       // checking the url contains the word orange
//       cy.url().should('contain',"sauce");
//   })

//       // we can also write this code by removing cy.url

//       it("using should without cy",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.url().should('include',"saucedemo")
//           .should('eq',"https://www.saucedemo.com/v1/")
//           .should('contain',"sauce");
//       })


//       // we can also write this code by using and

//       it("using and",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.url().should('include','saucedemo')
//           .and('eq','https://www.saucedemo.com/v1/')
//           .and('contain','sauce');
//       })

//       // using negative assertions also

//       it("using negative",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.url().should('not.include','saucesdemo')
//           .and('not.eq','https://www.saucedemos.com/v1/')
//           .and('not.contain','sauces');
//       })

//       // checking title

//       it("title check",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.title().should("eq",'Swag Labs')
//           .and('contain','Swag')
//           .and('not.include','Labsss');
//       })


//       it("logo visibility checking",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.get('.login_logo').should('be.visible')
//           cy.get('.bot_column').should('be.visible');
//       })


//       it("logo existing checking",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.get('.login_logo').should('exist');
//           cy.get('.bot_column').should('exist');
//       })

//       it("logo visibility, existing checking",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.get('.login_logo').should('be.visible').and('exist');
//           cy.get('.bot_column').should('be.visible').and('exist');
//       })

//       it("log in credentials",()=>{
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.get("[placeholder='Username']").type('standard_user');  // providing a value
//           cy.get("[placeholder='Username']").should('have.value','standard_user'); // checking the value
//           cy.get("[placeholder='Password']").type('secret_sauce'); // providing a value
//           cy.get("[placeholder='Password']").should('have.value','secret_sauce'); // checking the value
//           cy.get('#login-button').click();
//               })


//       it("Explicit Assertions",()=>{   //checking the title or name on the webpage whether it is matching or not using explicitly
//           // explicit assertions are not built in assertions they are customised assertions. We need to use js code.
//           // We cant use explicit assertions directly
//           cy.visit("https://www.saucedemo.com/v1/");
//           cy.get("[placeholder='Username']").type('standard_user');
//           cy.get("[placeholder='Password']").type('secret_sauce');
//           cy.get('#login-button').click();

//           let expName='Sauce Labs Bike Light';   // creating variable using let keyword to check exact name displayed after login

//           cy.get("#item_0_title_link").then((x) =>{  // capturing the element using locator and assigning or storing the value in variable x and passing that variable as a parameter into the function  to verify the text with expected name.
//   // we created the  user defined function
//               let actName= x.text();  // capturing the text from the variable to check later.
//               //TDD style -- Test-Driven Development
//               expect(actName).to.equal(expName);
//              // expect(actName).to.not.equal(expName);   // it will not pass beacuse the names are matching

//              // BDD style  --Behavior- Driven Development
//              assert.equal(actName,expName);
//              //assert.notEqual(actName,expName);   // it will not pass beacuse the names are matching

//           })
    
// })

// })



// Example 2

describe("Assertions",()=>{
  it("Movierulz",()=>{
    cy.visit("https://www.watchmovierulz.vet/");
    let expName='\nMovieRulz\nWatch & Download Telugu Hindi Tamil Malayalam Movies Online Free';
    cy.get('#branding').then((x)=>{
    let actName = x.text();
    expect(actName).to.equal(expName); // TDD
    assert.equal(actName,expName); //BDD
    })
  })
})
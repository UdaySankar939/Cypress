// Assignment on all topics

require('dotenv').config();
// Cypress.config({   // code to give global reties
//   retries: 3,
//   retryInterval: 2000
// })
describe('CypressAssignment', () => {
 
  it('locators', () => {
    cy.visit('https://www.google.co.in/');
    cy.get("[aria-label='Search']").type("Youtube{enter}");
    cy.get("span[class='ExCKkf z1asCe rzyADb'] svg").click();
    cy.get('#APjFqb').type("GFG{enter}");
  })

  it("Assertions",()=>{
    cy.visit("https://www.google.co.in/");
    cy.url().should('eq','https://www.google.co.in/');
    cy.title().should('eq','Google').and('contains',"Goo");
    cy.get('.lnXdpd').should("be.visible").and('exist');
    cy.get('.gLFyf').type("Wikipedia{enter}");
    cy.get('#APjFqb').should("have.value","Wikipedia");
  })


  it("Wait",()=>{
//to set a timeout for a specific action or assertion.pause the execution of a code for a specified amount of time
    cy.visit("https://www.saucedemo.com/v1/")
    cy.wait(3000); // wait for 30sec before testing anther line
    cy.get(".login_logo").should("be.visible");
    cy.get("[placeholder='Username']").should("be.visible");
    cy.wait(4000); // // wait for 40 sec before testing anther line
    cy.get("[placeholder='Password']").should("be.visible");
  })
   

    it("Timeout",()=>{
      cy.timeout(3000)  //code will run in this time line.It is global timeout
      cy.visit("https://www.saucedemo.com/v1/")
      cy.get("[placeholder='Username']").type("standard_user")
      cy.get("[placeholder='Password']").type("secret_sauce")
      cy.get("#login-button",{timeout:1000}).click();  //local timeout
    })
  
// //You can use the retries option in your test configuration to specify
// // the number of times a test should be retried before it's considered failed.
    
it("retries",{ retries: 2, retryInterval: 1000 },()=>{  // local retry 
//   // if the test case fail, it will retry 2 times with interval 1 sec.
  cy.visit('https://toponwardticket.com/');
  cy.get('[href="/"]').should('be.visible');
  cy.get('.white').should('be.visible'); 
  })


    it("DropDown",()=>{
      cy.visit('https://toponwardticket.com/');
      cy.get("select[name='menu-title-1']").select("Mr").should("contain","Mr");
    })

    
    it("Screenshots",()=>{
      cy.visit("https://www.youtube.com/");
      cy.get("[placeholder='Search']").type("Playwright Tutorials");
      cy.get('#search-icon-legacy > yt-icon.style-scope > .yt-icon-shape > div').click(); 
      cy.wait(30000)
      cy.screenshot('CypressAssignment001', {
      }); 
    })


    it(" Test Isolation1 ",()=>{
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })
    it("Test Isolation2",()=>{
      cy.get("button[onclick='jsAlert()']").click()
    });

  });
  
    it('env', () => {
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('#user-name').type(Cypress.env('user'));
      cy.get('#password').type(Cypress.env('pass'));
      cy.get("#login-button").click();
    });

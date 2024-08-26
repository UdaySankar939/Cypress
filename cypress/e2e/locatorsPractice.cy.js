
// describe('template spec', () => {  //describe ,name of suite, arrow function
//   it('passes', () => {             //  inside it block specify test and implement
//     cy.visit('https://www.google.co.in/');
//     cy.get('.gLFyf').type('youtube');
//    cy.get("div[id='jZ2SBf'] div:nth-child(1) span:nth-child(1)").click();
//    cy.get(".VuuXrf").click();
//    cy.title().should('eq','(217) YouTube');  //checks the title of the page
//    cy.wait(10000);
//   //  cy.get('#search').type('cinemapicha');
//   //  cy.get("button[id='search-icon-legacy'] yt-icon[class='style-scope ytd-searchbox'] div").click();

//   })
// })


// describe("Youtube",()=>{
// it("youtube", () =>{

// cy.visit("https://www.youtube.com/");
// cy.wait(3000);
// cy.get("[placeholder='Search']").type('cinemapicha');
// cy.get('#search-icon-legacy').click();
// cy.wait(3000);
// cy.get("ytd-mini-guide-entry-renderer[aria-label='Home'] yt-icon[id='icon'] div").click();
// cy.get('#search-clear-button').click();
// cy.get("[placeholder='Search']").type('thyview');
// cy.get('#search-icon-legacy').click();
// cy.wait(3000);
// cy.get('#search-clear-button').click();
// cy.get("[placeholder='Search']").type('playwright tutorials');
// cy.wait(3000);

// })
// })




// x path locators
// describe("x path locators",()=>{

//     it("finding total elements in a page",()=>{

//         cy.visit("http://www.automationpractice.pl/index.php");
//         // to find total no fo items
//         cy.xpath("//a[@title='Women']").click();  // cy.get is for css locator and cy.xpath is for xpath locators
//         cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7);  // listing all the 7 items

//     })
//         // chained x path code
// it("chained xpath", ()=>{

//     cy.visit("http://www.automationpractice.pl/index.php");
//     cy.xpath("//a[@title='Women']").click();
//     cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length',7);

// })
//     })
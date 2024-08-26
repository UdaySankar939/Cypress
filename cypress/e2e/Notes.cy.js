// In Cypress test cases called as specfication files  -- spec files
// to launch the application, we have many commands 
// we can access all commands in cypress using cy
// to capture title from a web page, cy.title().should('eq','title of the page')


// to axes all the cypress related command go to support and go to command.js and type the following command
//     /// <reference types="Cypress"/>
//we can add this in the beginning of every script or in the command.js 

// npx cypress open 
// npx cypress run --browser chrome
// npx cypress run --headed
// npx cypress run --spec copyrelativepath --headed   > to run soecific file


//npm install -D cypress-xpath   -- to install x path plugins. used to use x path locators in test cases
// after that go to command.js and add     /// <reference types="cypress-xpath"/>  
// after that go to e2e.js and type   require("cypress-xpath");


// locators -- used to interact with webpage.
// cypress by default supports css locator. and also support x path locator but we need to intsll x path selectors.
// 1st we need to locate the element after that we need to identify it.
// cy.get("locator") --- command used to identify the element


// css support multiple selectors.
// tag id --- #id
// tag class   --- .class
// tag attribute  -- [attribute="value"]
// tag class attribute -- .class[attribute="value"]



// assertions in cypress


// implicit (built in assertions) and explicit (we need to write explicitly)
// implicit --- we use should,and
// explicit --- TDD- test driven Development (Expect Keyword) & BDD- Behaviour Driven Development (Assert keyword) 
// eq, contain, include, have.length, have.vaue, exist etc   -- implicit
// cy.xpath('//a').should('have.length',5); // to find number of links in the page









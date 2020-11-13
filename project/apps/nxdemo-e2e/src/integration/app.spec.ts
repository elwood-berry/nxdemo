import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('nxdemo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to nxdemo!');
  });

  /*
  TEST #1 - Should Display ToDos
  Asert that the number of 'todos' we start with will be set
  **NOTE: This isn't the best example of end-to-end testing.
  */
 it('should display todos', () => {

    // HELPER + .SHOULD() + PASS IN FUNCTION (EXPECTS LENGTH OF HTML ELEMENTS THAT MATCHES OUR QUERY IS EQUAL TO 2)
   getTodos().should( (t) => expect(t.length).equal(2) );

   // HELPER + CLICK()
   getAddTodoButton().click();

   // HELPER + .SHOULD() + PASS IN FUNCTION (EXPECTS LENGTH OF HTML ELEMENTS THAT MATCHES OUR QUERY IS EQUAL TO 3)
   getTodos().should( (t) => expect(t.length).equal(3) );

 });

});

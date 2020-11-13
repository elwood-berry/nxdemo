// Default helper
export const getGreeting = () => cy.get('h1');

/*
HELPER #1
A function that returns 'cypress GET' css selector list item with the class of "todo"
*/
export const getTodos = () => cy.get('li.todo');

/*
HELPER #2
A function that returns 'cypress GET' css selector button with the id of "add-todo"
*/
export const getAddTodoButton = () => cy.get('button#add-todo');
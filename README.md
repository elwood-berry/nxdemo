# NX Monorepos DEMO
A demonstration of of the various dev tools NX provides. Nx is a set of extensible dev tools for monorepos, which helps you develop smarter and faster.

### Table Of Contents
1. [Creating An Application](https://github.com/elwood-berry/nxdemo#creating-an-application)
1. [Add E2E Tests](https://github.com/elwood-berry/nxdemo#add-e2e-tests)
1. [Display Todos](https://github.com/elwood-berry/nxdemo#display-todos)
1. [Connect to an API]()
1. [Add Node Application Implementing API]()
1. [Proxy]()
1. [Share Code]()
1. [Create Libs]()
1. [Dep Graph]()
1. [Computation Caching]()
1. [Test Affected Projects]()

1. [References](https://github.com/elwood-berry/nxdemo#references)

---

### Quick Commands 
A short list of common commands 

Serve the application (from within the root project directory).
```
$ nx serve [project name]
```

---

### Creating An Application
Create a new workspace.
```
npx create-nx-workspace@latest
```
Define workspace name.
```
Workspace name (e.g., org name) project
```
Define the platform for the workspace
```
What to create in the new workspace angular
```
Define Application name
```
Application name nxdemo
```
Pick Stylesheet format
```
Default stylesheet format SASS
```
Choose linter
```
TSLint [ Used by Angular CLI ] 
```
Use NX Cloud?
```
Use Nx Cloud? (It's free and doesn't require registration.) YES
```

---

### Add E2E Tests  
By default, Nx uses Cypress to run E2E tests.

1. Go to "[workspace name]/apps/[app name]-e2e/src/support/app.po.ts" ('..app.po.ts' - PO stands for 'Page Object').
```javascript
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
```

**Now go to "[workspace name]/apps/[app name]-e2e/src/integration/app.spec.ts". This is where we will define our end to end tests.**
```javascript
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
```

**Stop the current app running and run this command**
```
$ nx e2e nxdemo-e2e --watch
```

**Click on "Run All Specs"**

As you progress through your application you will work on making these end-to-end tests pass.

---

### Display Todos
We will run Cypress in the background while we fix our tests. 

**Go to your app.component.ts (project/apps/nxdemo/src/app/app.component.ts)**
```javascript
import { Component } from '@angular/core';

/*
DECLARE AN INTERFACE
*/
interface Todo {
  title: string;
}
@Component({
  selector: 'project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'nxdemo';
  
  // Add a 'todos' property to our component and define it as an array of our todo interface
  todos: Todo[] = [
    {
      title: "Todo 1"
    },
    {
      title: "Todo 2"
    },
  ]; 

  // Define a method on our class called AddTodo
  addTodo() {
    this.todos.push({
      // When called it should take out 'todos' array and push on to it a new object.
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }


}
```

**Go to your app.component.html (project/apps/nxdemo/src/app/app.component.html)** 
```html
<h1>To Dos</h1>
<ul>
  <li *ngFor="let t of todos" class="todo">{{ t.title }}</li>
</ul>

<button id="add-todo" (click)="addTodo()">Add Todo</button>
```

---

### Connect to API
Real world application do not live in isolation. They need APIs to talk to.

**Update '../app/app.module.ts'**
1. Import the 'HttpClientModule' module 
1. Add the same module to the imports array
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Update '../app/app.component.ts'**
1. Import the 'HttpClient'
1. Inject the client into the constructor
1. Add the 'fetch()' method to our component

```javascript 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  title: string;
}

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  // The purpose of this method is to make an HTTP request to our API and store the results in our Todo array
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
```


---

### Add Node Application Implementing API

---

### Proxy

---

### Share Code

---

### Create Libs

---

### Dep Graph

---

### Computation Caching

---

### Test Affected Projects

---

### References
1. [NPX](https://www.npmjs.com/package/npx) - Install NX packages to execute commands
1. [NX DEV](https://nx.dev/angular) - Main website for NX monorepos
1. [NX Cloud](http://nrwl.io/) - NX Cloud 
1. [Cypress](https://www.cypress.io/) - By default, Nx uses Cypress to run E2E tests.

---

For more information visit [Antera Software](https://anterasoftware.com/)

---

![Property Of Antera Software](https://anterasoftware.com/wp-content/uploads/2020/08/anterasoftware-logo.png)

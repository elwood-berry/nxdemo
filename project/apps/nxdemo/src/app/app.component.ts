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

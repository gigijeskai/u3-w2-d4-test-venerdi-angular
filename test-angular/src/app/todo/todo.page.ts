import { Component, OnInit } from '@angular/core';
import { NewTodo } from '../classes/new-todo';

import { TodosService } from '../todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  newTodo: NewTodo = new NewTodo();
  todos: NewTodo[] = [];
  constructor(private todoservive: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todoservive.allTodos;
  }
  addTodo(obj: NewTodo) {
    this.todoservive.addTodo(obj);
    this.newTodo = new NewTodo();
  }
}

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
  constructor(private todoservice: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todoservice.allTodos;
  }
  addTodo(obj: NewTodo) {
    this.todoservice.addTodo(obj);
    this.newTodo = new NewTodo();
  }
  checkTodo(i: number) {
    this.todoservice.checkTodo(i);
    this.newTodo = new NewTodo();
  }
}

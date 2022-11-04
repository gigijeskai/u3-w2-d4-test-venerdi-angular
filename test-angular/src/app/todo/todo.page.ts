import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todos: Todo[] = [
    {
      id: 1,
      title: 'imparare angular',
      completed: true,
    },
    {
      id: 2,
      title: 'inserire funzione add',
      completed: true,
    },
  ];
  constructor(private todoservive: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todoservive.allTodos;
  }
}

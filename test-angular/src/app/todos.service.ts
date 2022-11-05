import { Injectable } from '@angular/core';
import { NewTodo } from './classes/new-todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  allTodos: NewTodo[] = [
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

  constructor() {}
  addTodo(obj: NewTodo) {
    this.allTodos.push(obj);
  }
}

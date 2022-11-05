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
      completed: false,
    },
    {
      id: 2,
      title: 'inserire funzione add',
      completed: false,
    },
  ];

  constructor() {}
  addTodo(obj: NewTodo) {
    this.allTodos.push(obj);
  }
  checkTodo(i: number) {
    this.allTodos.splice(i, 1);
  }
}

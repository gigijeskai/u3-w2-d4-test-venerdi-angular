import { Injectable } from '@angular/core';
import { NewTodo } from './classes/new-todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  completedList: NewTodo[] = [];
  allTodos: NewTodo[] = [];

  constructor() {}
  addTodo(obj: NewTodo) {
    this.allTodos.push(obj);
  }
  checkTodo(i: number) {
    let completato: NewTodo[] = this.allTodos.splice(i, 1);
    this.completedList.push(completato[i]);
    console.log(this.completedList);
  }
}

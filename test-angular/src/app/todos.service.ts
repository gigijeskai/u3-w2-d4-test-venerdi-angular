import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  allTodos: Todo[] = [
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
}

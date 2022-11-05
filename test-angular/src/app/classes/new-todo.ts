import { Todo } from '../interfaces/todo';

export class NewTodo implements Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}

import { Component, OnInit } from '@angular/core';
import { NewTodo } from '../classes/new-todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { UserService } from '../shared/user.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss'],
})
export class TodoComponent implements OnInit {

  todoItens = [];

  constructor(
    private todoService: TodoService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoService.getData()
      .subscribe(res => this.todoItens = res);
  }

  getAllData() {
    this.todoService.getData()
      .subscribe(res => this.todoItens = res);
  }

  deleteItem(id) {
    this.todoService.deleteItem(this.todoItens[id].taskId)
      .subscribe(res => this.getAllData());
  }

  createItem(newItem) {
    this.todoService.createItem(newItem.toString())
      .subscribe(res => this.getAllData());
  }

  signOutUser() {
    this.userService.signOut();
    this.router.navigateByUrl('');
  }
}

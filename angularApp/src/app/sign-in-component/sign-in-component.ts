import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { TodoService } from '../shared/todo.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-in',
  templateUrl: './sign-in-component.html',
  styleUrls: ['./sign-in-component.scss'],
})
export class SignInComponent implements OnInit {

    email: string;

    constructor(
        private todoService: TodoService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    signInUser() {
        this.userService.loginUser(this.email);
    }
}

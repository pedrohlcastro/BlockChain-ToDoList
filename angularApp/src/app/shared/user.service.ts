import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    URL = 'http://localhost:3000/api';
    private user = null;
    constructor(
        private _http: Http,
        private notificationService: NotificationsService,
        private router: Router
    ) { }

    getUser(email) {
        let encodedEmail = encodeURI(email);
        encodedEmail = encodedEmail.replace('@', '%40');
        return this._http.get(`${this.URL}/User/${encodedEmail}`).map(res => res.json());
    }

    createUser(email) {
        const body = {
            '$class': 'org.todo.network.User',
            'email': email
        };
        return this._http.post(`${this.URL}/User`, body).map((res) => res.json());
    }

    loginUser(email) {
        this.getUser(email).subscribe((res) => {
            this.user = res;
            this.router.navigateByUrl('/todo');
        }, (err) => {
            this.createUser(email).subscribe((data) => {
                if (data) {
                    this.user = data;
                    this.router.navigateByUrl('/todo');
                } else {
                    this.notificationService.warn('Não foi possível criar sua Conta...', 'Tente novamente mais tarde...');
                }
            });
        });
    }

    signOut() {
        this.user = null;
    }

    isUserLoggedIn() {
        return this.user != null;
    }

    getSavedUser() {
        return this.user;
    }
}

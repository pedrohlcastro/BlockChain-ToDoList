import { UserService } from './user.service';
import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import urlencode from 'urlencode';
import guid from 'gen-uid';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  URL = 'http://localhost:3000/api';

  constructor(private _http: Http, private userService: UserService) { }

  getData() {
    const email = this.userService.getSavedUser().email;
    const emailEncoded = urlencode(`resource:org.todo.network.User#${email}`);
    return this._http.get(`${this.URL}/queries/selectTaskByOwner?owner=${emailEncoded}`).map(res => res.json());
  }

  deleteItem(id) {
    const opts = {
      '$class': 'org.todo.network.DeleteTask',
      'task': `resource:org.todo.network.Task#${id}`
    };
    return this._http.post(`${this.URL}/DeleteTask`, opts).map(res => res.json());
  }

  createItem(newItem: string) {
    const body = {
      '$class': 'org.todo.network.Task',
      'taskId': guid.token(),
      'value': newItem,
      'user': this.userService.getSavedUser().email
    };
    return this._http.post(`${this.URL}/Task`, body ).map(res => res.json());
  }

}

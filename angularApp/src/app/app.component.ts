import { UserService } from './shared/user.service';
import { Component, OnInit, Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  title = 'BlockChain ToDo-App';
  public toasterOptions = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'scale',
    position: ['top', 'left'],
    theClass: 'notifications',
  };

}

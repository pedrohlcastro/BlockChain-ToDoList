import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app.module.routes';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo-component/todo-component.component';
import { TodoService } from './shared/todo.service';
import { UserService } from './shared/user.service';
import { UserSignedInGuard } from './shared/user-signed-in-guard';
import { SignInComponent } from './sign-in-component/sign-in-component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [ TodoService, UserService, UserSignedInGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

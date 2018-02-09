import { UserSignedInGuard } from './shared/user-signed-in-guard';
import { SignInComponent } from './sign-in-component/sign-in-component';
import { TodoComponent } from './todo-component/todo-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const ROUTES: Routes = [
  { path: '', component: SignInComponent },
  { path: 'todo', component: TodoComponent, canActivate: [UserSignedInGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

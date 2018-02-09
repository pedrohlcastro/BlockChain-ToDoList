import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class UserSignedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationsService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const status = this.userService.isUserLoggedIn();
    if (status) {
        return true;
    } else {
      this.notificationService.warn('Você deve passar seu email para acessar a BlockChain', 'Clique para fechar');
      this.router.navigateByUrl('/');
      return false;
    }
  }
}

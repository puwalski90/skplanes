import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {ToastService} from "./toast.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private authService: AuthService, private toast: ToastService, private location: Location) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.isAdmin()){
      return true;
    }

    this.toast.failure('permission denied to url: ' + this.location.path());
    return false;
  }


}

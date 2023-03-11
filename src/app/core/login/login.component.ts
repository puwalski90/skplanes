import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast.service";
import {Credentials} from "../../models/credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credentials: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService) {
  }

  login() {
    this.authService.login(this.credentials)
      .then(this.onLoginSuccess.bind(this), this.onLoginFailure.bind(this));
  }

  // login() {
  //   this.authService.login(this.credentials)
  //     .then(user => this.router.navigate(['/dashboard']))
  //     .catch(error => this.toast.failure(error.message))
  // }

  register() {
    this.authService.register(this.credentials)
      .then(this.onRegisterSuccess.bind(this), this.onRegisterFailure.bind(this));
  }

  private onLoginSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.success("You are logged in");
  }

  private onLoginFailure(error: Error) {
    this.toast.failure(error.message);
  }

  private onRegisterSuccess() {
    this.toast.success("New account was created! You can log in now");
  }

  private onRegisterFailure(error: Error) {
    this.toast.failure(error.message);
  }


}

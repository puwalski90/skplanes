import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  user!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  private loadUser() {
      // this.authService.getUser().subscribe(user => this.user = user?.email as string);
    // this.authService.getUser()
    //   .then(user => this.user = user?.email as string);

    this.user = this.authService.getUser().email;
  }

  logout() {
    this.authService.logout()
      .then(this.logoutSuccess.bind(this), this.logoutFailure.bind(this));
  }

  private logoutSuccess() {
    this.router.navigate(['']);
    this.toast.success('You are log out!');
  }

  private logoutFailure(error: Error) {
    this.toast.failure(error.message);
  }




}

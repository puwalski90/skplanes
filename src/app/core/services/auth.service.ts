import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Credentials} from "../../models/credentials";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData!: any;

  constructor(private fireAuth: AngularFireAuth) { }

  login(credentials: Credentials) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user)
  }

  register(credentials: Credentials) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  isLoggedIn() {
    return !!this.userData; // jeśli userData = undefined to !! zwróci nam false
  }

  isAdmin() {
    if(this.getUser().email === 'admin@admin.pl'){
      return true;
    }
    return false;
  }


  getUser() {
    // return this.fireAuth.user;
    // return this.fireAuth.currentUser;
    return this.userData;
  }

  logout() {
    return this.fireAuth.signOut();
  }
}



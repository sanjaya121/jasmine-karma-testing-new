import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public loggedIn = false; // Simulate login status

  isLoggedIn(): boolean {
    return this.loggedIn=false; // Return the login status
  }

  login() {
    this.loggedIn = true; // Simulate login
  }

  logout() {
    this.loggedIn = false; // Simulate logout
  }
}

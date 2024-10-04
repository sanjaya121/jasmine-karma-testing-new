import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedIn = false; // Simulate login status

  isLoggedIn(): boolean {
    return this.loggedIn=true; // Return the login status
  }

  login() {
    this.loggedIn = true; // Simulate login
  }

  logout() {
    this.loggedIn = false; // Simulate logout
  }
}

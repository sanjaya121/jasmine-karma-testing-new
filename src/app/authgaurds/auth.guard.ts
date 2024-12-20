import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn())
   {
    return true; // User is logged in, allow access
  } 
  else {
    router.navigate(['/']); // Redirect to login page
    return false; // Prevent access
  }
};

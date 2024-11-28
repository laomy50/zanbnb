import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const isAuthenticated = !!sessionStorage.getItem('logged user'); 
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}

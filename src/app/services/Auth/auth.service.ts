import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getLoggedUser() {
    const user = sessionStorage.getItem('logged user');
    return user ? JSON.parse(user) : null;
  }

  getUserRoles(): string[] {
    const user = this.getLoggedUser();
    return user ? user.roles : [];
  }

  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }
  
}

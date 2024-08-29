import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userRole!: string;


  private baseUrl1 = environment.baseUrl + '/users';

  constructor(private http: HttpClient) { }

  isAdmin() {
    return this.userRole === 'admin';
  }

  isClient() {
    return this.userRole === 'client';
  }

  isBusiness() {
    return this.userRole === 'business';
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  registerUser(users: any): Observable<any> {
    return this.http.post(`${this.baseUrl1}/register`, users);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }

  
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl1}/login`, { username, password })
      .pipe(
        tap(response => {
          const role = response.roles;
          this.setUserRole(role);
        }),
        catchError(error => {
          // Handle the error here
          console.error('Login failed:', error);
          return throwError(error); 
        })
      );
  }

 

  setUserRole(roles: string): void {
    this.userRole = roles;
  }

  getUserRole(): string {
    return this.userRole;
  }

 

}


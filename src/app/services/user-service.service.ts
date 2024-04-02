import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userRole!: string;


  private baseUrl = environment.baseUrl + '/users';

  constructor(private http: HttpClient) { }

  
  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole() {
    return this.userRole;
  }

  isAdmin() {
    return this.userRole === 'ADMIN_ROLE';
  }

  
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  registerUser(users: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, users);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          const role = response.role;
          this.setUserRole(role);
        }),
        catchError(error => {
          // Handle the error here
          console.error('Login failed:', error);
          return throwError(error); // Rethrow the error
        })
      );
  }

}

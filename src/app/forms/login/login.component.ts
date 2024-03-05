import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  username!: string;
  password!: string;

  constructor(private userServiceService:UserServiceService,private router: Router) { }

  login(username: string, password: string): void {
    this.userServiceService.login(username, password).subscribe(
      response => {
        // Handle successful login response
        console.log('Login successful:', response);

        this.router.navigate(['/memberArea']);
      },
      error => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
  }
}

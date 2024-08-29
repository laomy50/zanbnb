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
        console.log('Login successful:', response);
  
        // Convert roles to a string (assuming response.roles is an array of roles)
        const user = JSON.stringify(response);
        sessionStorage.setItem('logged user', user);
  
        this.router.navigate(['/memberArea']);
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }
  

  // login(username: string, password: string): void {
  //   this.userServiceService.login(username, password).subscribe(
  //     response => {
  //       // Handle successful login response
  //       console.log('Login successful:', response);

  //       // Fetch user details including roles
  //       this.userServiceService.fetchUserDetails().subscribe(
  //         userDetails => {
  //           // Store user details in the service
  //           this.userServiceService.setUserDetails(userDetails);
  //           // Navigate to the dashboard
  //           this.router.navigate(['/memberArea']);
  //         },
  //         error => {
  //           // Handle error in fetching user details
  //           console.error('Error fetching user details:', error);
  //         }
  //       );
  //     },
  //     error => {
  //       // Handle login error
  //       console.error('Login error:', error);
  //     }
  //   );
  // }
}

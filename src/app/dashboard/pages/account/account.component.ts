import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  user: any = null; // User object to store fetched user details
  errorMessage: string = ''; // For displaying errors

  constructor(private authService: UserServiceService) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    // Retrieve userId from sessionStorage
    const userData = sessionStorage.getItem('logged user');
    const userId = userData ? JSON.parse(userData).userId : null;

    if (!userId) {
      this.errorMessage = 'No user is logged in or userId not found.';
      return;
    }

    // Fetch user details by userId
    this.authService.getUserById(userId).subscribe(
      (data: any) => {
        this.user = data; 
        this.errorMessage = ''; 
      },
      error => {
        this.user = null;
        this.errorMessage = 'Failed to fetch user details. Please try again later.';
        console.error('Error fetching user details:', error);
      }
    );
  }
}
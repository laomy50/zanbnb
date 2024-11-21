import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserServiceService } from '../../services/user-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent {

  
  username!: string;
  fname!: string;
  lname!: string;
  email!: string;
  password!: string;

  user: User = new User();
  submitted = false;

  constructor(private userServiceService:UserServiceService,
    private router: Router,
    private dialogRef: MatDialogRef<UserModalComponent>,
    ){}
  ngOnInit(): void {
  
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userServiceService
    .registerUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/']);
  }

  reg() {
    console.log('Login button clicked');
  }

  closeDialog(): void {
    this.dialogRef.close(); // Close the modal without any data
  }
}

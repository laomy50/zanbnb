import { Component } from '@angular/core';

import { User } from '../../model/user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {

  
  username!: string;
  fname!: string;
  lname!: string;
  email!: string;
  password!: string;

  user: User = new User();
  submitted = false;

  constructor(private userServiceService:UserServiceService,
    private router: Router,
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
}

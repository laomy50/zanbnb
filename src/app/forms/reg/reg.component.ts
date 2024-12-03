import { Component } from '@angular/core';

import { User } from '../../model/user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {

  regform!:FormGroup;
  fullYear:any;
  
  username!: string;
  fname!: string;
  lname!: string;
  email!: string;
  password!: string;

  selectedRole: number | undefined;
  user: User = new User();
  submitted = false;

  constructor(private userServiceService:UserServiceService,
    private router: Router,
    ){}
  ngOnInit(): void {

    this.fullYear = new Date().getFullYear();

    this.regform = new FormGroup({
      password: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      role_ids: new FormControl('', [Validators.required]),
    });
  
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.user.role_ids = this.selectedRole ? [this.selectedRole] : [];
    
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

  signUp() {
  
  }
  

  signIn() {
    this.router.navigate(['login-auth']);
  }

  register() {
    this.router.navigate(['register-user']);
  }

  getAllRoles() {

  }
}

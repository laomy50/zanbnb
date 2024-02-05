import { Component } from '@angular/core';

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

  constructor() { }

  reg() {
    console.log('Login button clicked');
  }
}

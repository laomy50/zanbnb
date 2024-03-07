import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../model/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
 
})
export class NavComponent implements OnInit{

  username!: string;
  password!: string;
  modalRef!: NgbModalRef;

  user: User = new User();
  submitted = false;

  
  closeResult = '';
contents!: TemplateRef<any>;

  constructor(private modalService: NgbModal,private userServiceService:UserServiceService,
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

  openi(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  
  opens(contents: TemplateRef<any>) {
    this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }


  open(content:any): void {
    this.modalRef = this.modalService.open(content);
  }
  
  login(username: string, password: string): void {
    this.userServiceService.login(username, password).subscribe(
      response => {
        // Handle successful login response
        console.log('Login successful:', response);

        this.router.navigate(['/memberArea']);
        this.modalRef.close();
        
      },
      error => {
        // Handle login error
        console.error('Login error:', error);
      }
    );
  }

}

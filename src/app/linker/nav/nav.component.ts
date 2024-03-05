import { Component, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  username!: string;
  password!: string;
  modalRef!: NgbModalRef;
  
  closeResult = '';
contents!: TemplateRef<any>;

  constructor(private modalService: NgbModal,private userServiceService:UserServiceService,
    private router: Router,
    ){}

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

import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {

  closeResult = '';
  contents!: TemplateRef<any>;
  
    constructor(private modalService: NgbModal){}

  open(content: TemplateRef<any>) {
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

}

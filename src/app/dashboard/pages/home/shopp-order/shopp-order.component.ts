import { Component, OnInit } from '@angular/core';
import { ShoppPackageService } from '../../../../services/shopp-package.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopp-order',
  templateUrl: './shopp-order.component.html',
  styleUrl: './shopp-order.component.css'
})
export class ShoppOrderComponent implements OnInit {
  shopps: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private shoppPackageService: ShoppPackageService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.shoppPackageService.getAllShoppingPackage()
    .subscribe(
      (data) => {
        this.shopps = data.map(shopp => this.imageProcessingService.createShoppImages(shopp));
      },
      (error) => {
        console.error('Failed to fetch shopps', error);
      }
    );
  }

  bookNow(){}
}

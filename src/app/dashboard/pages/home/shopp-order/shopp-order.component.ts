import { Component, OnInit } from '@angular/core';
import { ShoppPackageService } from '../../../../services/shopp-package.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';

@Component({
  selector: 'app-shopp-order',
  templateUrl: './shopp-order.component.html',
  styleUrl: './shopp-order.component.css'
})
export class ShoppOrderComponent implements OnInit {
  shopps: any[] = [];
  

  constructor(private shoppPackageService: ShoppPackageService,
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
}

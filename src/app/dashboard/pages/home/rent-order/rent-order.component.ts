import { Component, OnInit } from '@angular/core';
import { RentPackageService } from '../../../../services/rent-package.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { RentPackage } from '../../../../model/rent-package';


@Component({
  selector: 'app-rent-order',
  templateUrl: './rent-order.component.html',
  styleUrl: './rent-order.component.css'
})
export class RentOrderComponent implements OnInit {
  rents: any[] = [];
  

  constructor(private rentsService: RentPackageService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.rentsService.getAllRentPackage()
    .subscribe(
      (data) => {
        this.rents = data.map(rent => this.imageProcessingService.createRentImages(rent));
      },
      (error) => {
        console.error('Failed to fetch rents', error);
      }
    );
  }
}

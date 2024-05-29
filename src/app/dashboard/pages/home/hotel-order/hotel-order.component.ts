import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../services/hotel.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotel-order',
  templateUrl: './hotel-order.component.html',
  styleUrl: './hotel-order.component.css'
})
export class HotelOrderComponent implements OnInit {
  hotels: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private hotelService: HotelService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.hotelService.getAllHotelPackage()
    .subscribe(
      (data) => {
        this.hotels = data.map(hotel => this.imageProcessingService.createHotellImages(hotel));
      },
      (error) => {
        console.error('Failed to fetch Hotels', error);
      }
    );
  }

  bookNow(){}
}

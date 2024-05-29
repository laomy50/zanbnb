import { Component, OnInit } from '@angular/core';
import { TripPackage } from '../../../../model/trip-package';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TripService } from '../../../../services/trip.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trip-order',
  templateUrl: './trip-order.component.html',
  styleUrl: './trip-order.component.css'
})
export class TripOrderComponent implements OnInit {
  trips: any[] = [];
propertyForm!:FormGroup;
  

  constructor(private tripService: TripService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.tripService.getAllTripPackage()
    .subscribe(
      (data) => {
        this.trips = data.map(trip => this.imageProcessingService.createTripImages(trip));
      },
      (error) => {
        console.error('Failed to fetch trips', error);
      }
    );
  }

  bookNow(){}
}


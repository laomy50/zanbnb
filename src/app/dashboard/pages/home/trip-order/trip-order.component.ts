import { Component, OnInit } from '@angular/core';
import { TripPackage } from '../../../../model/trip-package';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TripService } from '../../../../services/trip.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

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
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
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

  // add
    this.propertyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      numberOfAdults: ['', Validators.required],
      numberOfChildren: ['', Validators.required]
    });
  }

  onClick(add: any) {
    this.modalService.open(add, { size: 'lg', centered: true });
  }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createBooking(this.propertyForm.value)
        .subscribe(response => {
          console.log('Booking created successfully:', response);
          this.propertyForm.reset();
        }, error => {
          console.error('Error creating booking:', error);
         
        });
    } else {
      console.log("error");
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrl: './restaurant-order.component.css'
})
export class RestaurantOrderComponent implements OnInit {
  restaurants: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private restaurantService: RestaurantService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurantPackage()
    .subscribe(
      (data) => {
        this.restaurants = data.map(restaurant => this.imageProcessingService.createRestaurantImages(restaurant));
      },
      (error) => {
        console.error('Failed to fetch rents', error);
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
      this.bookingService.createBeachBooking(this.propertyForm.value)
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

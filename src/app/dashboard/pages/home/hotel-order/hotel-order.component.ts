import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../services/hotel.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

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
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
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

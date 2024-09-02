import { Component, OnInit } from '@angular/core';
import { RentPackageService } from '../../../../services/rent-package.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { RentPackage } from '../../../../model/rent-package';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';


@Component({
  selector: 'app-rent-order',
  templateUrl: './rent-order.component.html',
  styleUrl: './rent-order.component.css'
})
export class RentOrderComponent implements OnInit {
  rents: any[] = [];
  propertyForm!: FormGroup;
  

  constructor(private rentsService: RentPackageService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
     private bookingService: BookingService,
    config: NgbModalConfig,
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

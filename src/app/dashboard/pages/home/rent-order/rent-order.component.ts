import { Component, OnInit, TemplateRef } from '@angular/core';
import { RentPackageService } from '../../../../services/rent-package.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { RentPackage } from '../../../../model/rent-package';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    const userId = sessionStorage.getItem('userId');
    this.propertyForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]) ,
      email: new FormControl('',[ Validators.required, Validators.email]) ,
      address: new FormControl('',[ Validators.required]) ,
      phone: new FormControl('',[ Validators.required]),
      dateFrom: new FormControl('',[ Validators.required]),
      dateTo: new FormControl('',[ Validators.required]),
      numberOfAdults: new FormControl('',[ Validators.required]),
      numberOfChildren: new FormControl('',[ Validators.required]),
      beachPackageId: new FormControl('',[Validators.required]),
      userId: new FormControl('',Validators.required) 
    });
  }


  openModal(content: TemplateRef<any>, rentPackageId: number): void {
    // Patch the form value with the rentPackageId
    this.propertyForm.patchValue({ rentPackageId: rentPackageId });
    console.log('Selected Rent Package ID:', rentPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
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

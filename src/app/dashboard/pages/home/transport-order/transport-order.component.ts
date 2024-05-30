import { Component, OnInit } from '@angular/core';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TransportService } from '../../../../services/transport.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-transport-order',
  templateUrl: './transport-order.component.html',
  styleUrl: './transport-order.component.css'
})
export class TransportOrderComponent implements OnInit {
  transports: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private transportService: TransportService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.transportService.getAllTransportPackage()
    .subscribe(
      (data) => {
        this.transports = data.map(transport => this.imageProcessingService.createTransportImages(transport));
      },
      (error) => {
        console.error('Failed to fetch transport', error);
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


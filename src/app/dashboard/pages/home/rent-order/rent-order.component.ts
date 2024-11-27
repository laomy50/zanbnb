import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  rentPackageId!: number;

  @ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;

  

  constructor(private rentsService: RentPackageService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
     private bookingService: BookingService,
    config: NgbModalConfig,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {

     // Retrieve the item from sessionStorage
const loggedUser = sessionStorage.getItem('logged user');

// Check if the item exists
if (loggedUser) {
    // Parse the JSON string to an object
    const user = JSON.parse(loggedUser);

    // Access the userId
    const userId = user.userId;
 // Initialize the form first with empty values or defaults
 this.propertyForm = this.formBuilder.group({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  address: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.required]),
  dateFrom: new FormControl('', [Validators.required]),
  dateTo: new FormControl('', [Validators.required]),
  numberOfAdults: new FormControl('', [Validators.required]),
  numberOfChildren: new FormControl('', [Validators.required]),
  rentPackageId: new FormControl('', [Validators.required]),  
  userId: new FormControl(userId, [Validators.required]) 
});

} else {
    console.log('No user data found in sessionStorage.');
}
 
   
  
    // Fetch rent packages and set the rentPackageId dynamically
    this.rentsService.getAllRentPackage()
      .subscribe(
        (data) => {
          this.rents = data.map(rent  => this.imageProcessingService.createRentImages(rent));
          console.log(data);
  
          // to set the first rentPackageId
          if (this.rents.length > 0) {
            this.propertyForm.get('rentPackageId')?.setValue(this.rents[0].rentPackageId);
          }
        },
        (error) => {
          console.error('Failed to fetch rents', error);
        }
      );

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
      this.bookingService.createRentBooking(this.propertyForm.value)
        .subscribe(response => {
          console.log('Booking created successfully:', response);
          this.propertyForm.reset();
           // Close the current modal
           this.modalService.dismissAll(); 

           // Open the payment methods modal
           this.openPaymentMethodsModal();
        }, error => {
          console.error('Error creating booking:', error);
         
        });
    } else {
      console.log("error");
    }
  }

  openPaymentMethodsModal() {
    this.modalService.open(this.paymentMethodsModal, { size: 'lg' });
  }

    // view
    toggleImageSize(event: Event) {
      const imgElement = event.target as HTMLImageElement;
      if (imgElement.classList.contains('enlarged')) {
        imgElement.classList.remove('enlarged');
      } else {
        this.resetEnlargedImages();
        imgElement.classList.add('enlarged');
      }
    }
  
    private resetEnlargedImages() {
      const enlargedImages = document.querySelectorAll('.enlarged');
      enlargedImages.forEach(img => img.classList.remove('enlarged'));
    }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HotelService } from '../../../../services/hotel.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-hotel-order',
  templateUrl: './hotel-order.component.html',
  styleUrl: './hotel-order.component.css'
})
export class HotelOrderComponent implements OnInit {
  hotels: any[] = [];
propertyForm!: FormGroup;
hotelPackageId!:number;
@ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;  

  constructor(private hotelService: HotelService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
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
  hotelPackageId: new FormControl('', [Validators.required]),  
  userId: new FormControl(userId, [Validators.required]) 
});

} else {
    console.log('No user data found in sessionStorage.');
}

    this.hotelService.getAllHotelPackage()
    .subscribe(
      (data) => {
        this.hotels = data.map(hotel => this.imageProcessingService.createHotellImages(hotel));
          // to set the first rentPackageId
          if (this.hotels.length > 0) {
            this.propertyForm.get('hotelPackageId')?.setValue(this.hotels[0].hotelPackageId);
          }
      },
      (error) => {
        console.error('Failed to fetch Hotels', error);
      }
    );

  
  }

  openModal(content: TemplateRef<any>, hotelPackageId: number): void {
    // Patch the form value with the hotelPackageId
    this.propertyForm.patchValue({ hotelPackageId: hotelPackageId });
    console.log('Selected Hotel Package ID:', hotelPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // onClick(add: any) {
  //   this.modalService.open(add, { size: 'lg', centered: true });
  // }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createHotelBooking(this.propertyForm.value)
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

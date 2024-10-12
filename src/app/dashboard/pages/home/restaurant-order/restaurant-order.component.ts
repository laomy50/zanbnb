import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrl: './restaurant-order.component.css'
})
export class RestaurantOrderComponent implements OnInit {
  restaurants: any[] = [];
propertyForm!: FormGroup;
restaurantPackageId!:number;

@ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;
  

  constructor(private restaurantService: RestaurantService,
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
  restaurantPackageId: new FormControl('', [Validators.required]),  
  userId: new FormControl(userId, [Validators.required]) 
});

} else {
    console.log('No user data found in sessionStorage.');
}


    this.restaurantService.getAllRestaurantPackage()
    .subscribe(
      (data) => {
        this.restaurants = data.map(restaurant => this.imageProcessingService.createRestaurantImages(restaurant));
          // to set the first restaurantPackageId
          if (this.restaurants.length > 0) {
            this.propertyForm.get('restaurantPackageId')?.setValue(this.restaurants[0].restaurantPackageId);
          }
      },
      (error) => {
        console.error('Failed to fetch rents', error);
      }
    );


  }

  // onClick(add: any) {
  //   this.modalService.open(add, { size: 'lg', centered: true });
  // }

  openModal(content: TemplateRef<any>, restaurantPackageId: number): void {
    // Patch the form value with the restaurantPackageId
    this.propertyForm.patchValue({ restaurantPackageId: restaurantPackageId });
    console.log('Selected Restaurant Package ID:', restaurantPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createRestaurantBooking(this.propertyForm.value)
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

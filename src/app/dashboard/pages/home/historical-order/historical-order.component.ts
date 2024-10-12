import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HistoricalService } from '../../../../services/historical.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-historical-order',
  templateUrl: './historical-order.component.html',
  styleUrl: './historical-order.component.css'
})
export class HistoricalOrderComponent implements OnInit {
  historicals: any[] = [];
propertyForm!: FormGroup;
historicalPackageId!:number;
  
@ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;

  constructor(private historicalService: HistoricalService,
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
  historicalPackageId: new FormControl('', [Validators.required]),  
  userId: new FormControl(userId, [Validators.required]) 
});

} else {
    console.log('No user data found in sessionStorage.');
}

    this.historicalService.getAllHistoricalPackage()
    .subscribe(
      (data) => {
        this.historicals = data.map(historical => this.imageProcessingService.createHistoricalImages(historical));

               // to set the first rentPackageId
               if (this.historicals.length > 0) {
                this.propertyForm.get('historicalPackageId')?.setValue(this.historicals[0].historicalPackageId);
              }
      },
      (error) => {
        console.error('Failed to fetch historicals', error);
      }
    );


  }

  openModal(content: TemplateRef<any>, historicalPackageId: number): void {
    // Patch the form value with the historicalPackageId
    this.propertyForm.patchValue({ historicalPackageId: historicalPackageId });
    console.log('Selected Historical Package ID:', historicalPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  // onClick(add: any) {
  //   this.modalService.open(add, { size: 'lg', centered: true });
  // }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createHistoricalBooking(this.propertyForm.value)
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

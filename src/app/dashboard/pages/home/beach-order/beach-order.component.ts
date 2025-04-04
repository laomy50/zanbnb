import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BeachService } from '../../../../services/beach.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-beach-order',
  templateUrl: './beach-order.component.html',
  styleUrl: './beach-order.component.css'
})
export class BeachOrderComponent implements OnInit {
  beaches: any[] = [];
propertyForm!: FormGroup;
beachPackageId!: number;
  
@ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;

  constructor(private beachService: BeachService,
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
       beachPackageId: new FormControl('', [Validators.required]),  
       userId: new FormControl(userId, [Validators.required]) 
     });

    } else {
      console.log('No user data found in sessionStorage.');
  }

  
   
    // Fetch beach packages and set the beachPackageId dynamically
    this.beachService.getAllBeachPackage()
      .subscribe(
        (data) => {
          this.beaches = data.map(beach => this.imageProcessingService.createBeachImages(beach));
          console.log(data);
  
          // to set the first beachPackageId
          if (this.beaches.length > 0) {
            this.propertyForm.get('beachPackageId')?.setValue(this.beaches[0].beachPackageId);
          }
        },
        (error) => {
          console.error('Failed to fetch beaches', error);
        }
      );

  }

  openModal(content: TemplateRef<any>, beachPackageId: number): void {
    // Patch the form value with the beachPackageId
    this.propertyForm.patchValue({ beachPackageId: beachPackageId });
    console.log('Selected Beach Package ID:', beachPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createBeachBooking(this.propertyForm.value)
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
      console.log("Form is invalid");
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

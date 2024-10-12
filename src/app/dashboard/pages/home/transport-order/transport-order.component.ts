import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TransportService } from '../../../../services/transport.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../../../services/booking.service';

@Component({
  selector: 'app-transport-order',
  templateUrl: './transport-order.component.html',
  styleUrl: './transport-order.component.css'
})
export class TransportOrderComponent implements OnInit {
  transports: any[] = [];
propertyForm!: FormGroup;
transportPackageId!:number;
  
@ViewChild('paymentMethodsModal') paymentMethodsModal!: TemplateRef<any>;

  constructor(private transportService: TransportService,
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
  transportPackageId: new FormControl('', [Validators.required]),  
  userId: new FormControl(userId, [Validators.required]) 
});

} else {
    console.log('No user data found in sessionStorage.');
}

    this.transportService.getAllTransportPackage()
    .subscribe(
      (data) => {
        this.transports = data.map(transport => this.imageProcessingService.createTransportImages(transport));
             // to set the first transportsPackageId
             if (this.transports.length > 0) {
              this.propertyForm.get('transportPackageId')?.setValue(this.transports[0].transportPackageId);
            }
      },
      (error) => {
        console.error('Failed to fetch transport', error);
      }
    );


  }

  openModal(content: TemplateRef<any>, transportPackageId: number): void {
    // Patch the form value with the rentPackageId
    this.propertyForm.patchValue({ transportPackageId: transportPackageId });
    console.log('Selected Transport Package ID:', transportPackageId);

    // Open the modal
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  bookNow(): void {
    if (this.propertyForm.valid) {
      this.bookingService.createTransportBooking(this.propertyForm.value)
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


import { Component, OnInit } from '@angular/core';
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
  

  constructor(private beachService: BeachService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.getAllBeachPackages();
  // add
    this.propertyForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required]) ,
      email: new FormControl('',[ Validators.required, Validators.email]) ,
      address: new FormControl('',[ Validators.required]) ,
      phone: new FormControl('',[ Validators.required]),
      dateFrom: new FormControl('',[ Validators.required]),
      dateTo: new FormControl('',[ Validators.required]),
      numberOfAdults: new FormControl('',[ Validators.required]),
      numberOfChildren: new FormControl('',[ Validators.required]) 
    });
  }

  getAllBeachPackages(){
    this.beachService.getAllBeachPackage()
    .subscribe(
      (data) => {
        this.beaches = data.map(beach => this.imageProcessingService.createBeachImages(beach));
      },
      (error) => {
        console.error('Failed to fetch forests', error);
      }
    );

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
      console.log("Form is invalid");
    }
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

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { TripPackage } from '../../../../model/trip-package';
import { TripService } from '../../../../services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css'
})
export class TripsComponent {

  
  
  tripPackage: TripPackage = {
    tripName:"",
    tripPrice:"",
    tripLocation:"",
    tripImages:[],
  }
  
  constructor(private tripService:TripService,
    private domSanitizer: DomSanitizer) { }

    addTrip(tripForm:NgForm){
      const tripPackageFormData = this.preparedFormData(this.tripPackage)
      this.tripService.addNewTripPackage(tripPackageFormData).subscribe(
        (response:TripPackage)=>{
          tripForm.reset();
          this.tripPackage.tripImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(tripPackage: TripPackage): FormData {
      const formData = new FormData();

      formData.append(
        'tripPackage',
        new Blob([JSON.stringify(tripPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < tripPackage.tripImages!.length; i++){
        formData.append(
          'imageFile',
          tripPackage.tripImages![i].file,
          tripPackage.tripImages![i].file.name
        );
      }

      return formData;
  }

  onFileSelected(event: any){
    if(event.target.files){
      const file = event.target.files[0];

      const rentFileHandle: RentFileHandle = {
          file: file,
          url:  this.domSanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
      }

      this.tripPackage.tripImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.tripPackage.tripImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.tripPackage.tripImages!.push(rentFileHandle);
  }


}

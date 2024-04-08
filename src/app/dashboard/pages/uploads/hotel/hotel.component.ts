import { Component } from '@angular/core';
import { HotelPackage } from '../../../../model/hotel-package';
import { HotelService } from '../../../../services/hotel.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RentFileHandle } from '../../../../model/rentFile_handle';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {

    
  hotelPackage: HotelPackage = {
    hotelName:"",
    hotelPrice:"",
    hotelLocation:"",
    hotelImages:[],
  }
  
  constructor(private hotelService:HotelService,
    private domSanitizer: DomSanitizer) { }

    addHotel(hotelForm:NgForm){
      const hotelPackageFormData = this.preparedFormData(this.hotelPackage)
      this.hotelService.addNewHotelPackage(hotelPackageFormData).subscribe(
        (response:HotelPackage)=>{
          hotelForm.reset();
          this.hotelPackage.hotelImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(hotelPackage: HotelPackage): FormData {
      const formData = new FormData();

      formData.append(
        'hotelPackage',
        new Blob([JSON.stringify(hotelPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < hotelPackage.hotelImages!.length; i++){
        formData.append(
          'imageFile',
          hotelPackage.hotelImages![i].file,
          hotelPackage.hotelImages![i].file.name
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

      this.hotelPackage.hotelImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.hotelPackage.hotelImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.hotelPackage.hotelImages!.push(rentFileHandle);
  }


}

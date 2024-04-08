import { Component } from '@angular/core';
import { RestaurantPackage } from '../../../../model/restaurant-package';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { RestaurantService } from '../../../../services/restaurant.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  
  restaurantPackage: RestaurantPackage = {
    restaurantName:"",
    restaurantPrice:"",
    restaurantLocation:"",
    restaurantImages:[],
  }
  
  constructor(private restaurantService:RestaurantService,
    private domSanitizer: DomSanitizer) { }

    addShopp(restaurantForm:NgForm){
      const restaurantPackageFormData = this.preparedFormData(this.restaurantPackage)
      this.restaurantService.addNewRestaurantPackage(restaurantPackageFormData).subscribe(
        (response:RestaurantPackage)=>{
          restaurantForm.reset();
          this.restaurantPackage.restaurantImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(restaurantPackage: RestaurantPackage): FormData {
      const formData = new FormData();

      formData.append(
        'restaurantPackage',
        new Blob([JSON.stringify(restaurantPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < restaurantPackage.restaurantImages!.length; i++){
        formData.append(
          'imageFile',
          restaurantPackage.restaurantImages![i].file,
          restaurantPackage.restaurantImages![i].file.name
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

      this.restaurantPackage.restaurantImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.restaurantPackage.restaurantImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.restaurantPackage.restaurantImages!.push(rentFileHandle);
  }

}

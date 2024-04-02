import { Component } from '@angular/core';
import { RentPackage } from '../../../model/rent-package';
import { NgForm } from '@angular/forms';
import { RentPackageService } from '../../../services/rent-package.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RentFileHandle } from '../../../model/rentFile_handle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  rentPackage: RentPackage = {
    rentName:"",
    rentPrice:"",
    rentLocation:"",
    rentImages:[],
  }

  constructor(private rentPackageService:RentPackageService,
    private domSanitizer: DomSanitizer) { }

  addRent(rentForm:NgForm){
    const rentPackageFormData = this.preparedFormData(this.rentPackage)
    this.rentPackageService.addRentPackage(rentPackageFormData).subscribe(
      (response:RentPackage)=>{
        rentForm.reset();
        this.rentPackage.rentImages = [];
      },
      (error:HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  preparedFormData(rentPackage: RentPackage): FormData {
      const formData = new FormData();

      formData.append(
        'rentPackage',
        new Blob([JSON.stringify(rentPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < rentPackage.rentImages!.length; i++){
        formData.append(
          'imageFile',
          rentPackage.rentImages![i].file,
          rentPackage.rentImages![i].file.name
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

      this.rentPackage.rentImages!.push(rentFileHandle);
    }
  }
 
  removeImages(i:any){
    this.rentPackage.rentImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.rentPackage.rentImages!.push(rentFileHandle);
  }

}

import { Component } from '@angular/core';
import { ShoppingPackage } from '../../../../model/shopp-package';
import { ShoppPackageService } from '../../../../services/shopp-package.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RentFileHandle } from '../../../../model/rentFile_handle';

@Component({
  selector: 'app-shopp',
  templateUrl: './shopp.component.html',
  styleUrl: './shopp.component.css'
})
export class ShoppComponent {

  shoppingPackage: ShoppingPackage = {
    shoppingName:"",
    shoppingPrice:"",
    shoppingLocation:"",
    shoppingImages:[],
  }

  constructor(private shoppPackageService:ShoppPackageService,
    private domSanitizer: DomSanitizer) { }

    addShopp(shoppForm:NgForm){
      const shoppPackageFormData = this.preparedFormData(this.shoppingPackage)
      this.shoppPackageService.addShoppingPackage(shoppPackageFormData).subscribe(
        (response:ShoppingPackage)=>{
          console.log(this.shoppingPackage);
          shoppForm.reset();
          this.shoppingPackage.shoppingImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(shoppingPackage: ShoppingPackage): FormData {
      const formData = new FormData();

      formData.append(
        'shoppingPackage',
        new Blob([JSON.stringify(shoppingPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < shoppingPackage.shoppingImages!.length; i++){
        formData.append(
          'imageFile',
          shoppingPackage.shoppingImages![i].file,
          shoppingPackage.shoppingImages![i].file.name
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

      this.shoppingPackage.shoppingImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.shoppingPackage.shoppingImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.shoppingPackage.shoppingImages!.push(rentFileHandle);
  }

}

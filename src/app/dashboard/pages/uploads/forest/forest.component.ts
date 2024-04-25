import { Component } from '@angular/core';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ForestService } from '../../../../services/forest.service';
import { NgForm } from '@angular/forms';
import { ForestPackage } from '../../../../model/forest-package';

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrl: './forest.component.css'
})
export class ForestComponent {

  
  forestPackage: ForestPackage = {
    forestName:"",
    forestPrice:"",
    forestLocation:"",
    forestImages:[],
  }
  
  constructor(private forestService:ForestService,
    private domSanitizer: DomSanitizer) { }

    addForest(forestForm:NgForm){
      const forestPackageFormData = this.preparedFormData(this.forestPackage)
      this.forestService.addNewForestPackage(forestPackageFormData).subscribe(
        (response:ForestPackage)=>{
          forestForm.reset();
          this.forestPackage.forestImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(forestPackage: ForestPackage): FormData {
      const formData = new FormData();

      formData.append(
        'forestPackage',
        new Blob([JSON.stringify(forestPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < forestPackage.forestImages!.length; i++){
        formData.append(
          'imageFile',
          forestPackage.forestImages![i].file,
          forestPackage.forestImages![i].file.name
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

      this.forestPackage.forestImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.forestPackage.forestImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.forestPackage.forestImages!.push(rentFileHandle);
  }

}

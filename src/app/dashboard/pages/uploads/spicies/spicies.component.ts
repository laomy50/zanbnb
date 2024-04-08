import { Component } from '@angular/core';
import { SpiciesService } from '../../../../services/spicies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { HttpErrorResponse } from '@angular/common/http';
import { SpiciesPackage } from '../../../../model/spicies-package';

@Component({
  selector: 'app-spicies',
  templateUrl: './spicies.component.html',
  styleUrl: './spicies.component.css'
})
export class SpiciesComponent {

  spiciesPackage: SpiciesPackage = {
    spiciesName:"",
    spiciesPrice:"",
    spiciesLocation:"",
    spiciesImages:[],
  }
  
  constructor(private spiciesService:SpiciesService,
    private domSanitizer: DomSanitizer) { }

    addShopp(spiciesForm:NgForm){
      const spiciesPackageFormData = this.preparedFormData(this.spiciesPackage)
      this.spiciesService.addNewSpiciesPackage(spiciesPackageFormData).subscribe(
        (response:SpiciesPackage)=>{
          console.log(this.spiciesPackage);
          spiciesForm.reset();
          this.spiciesPackage.spiciesImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(spiciesPackage: SpiciesPackage): FormData {
      const formData = new FormData();

      formData.append(
        'spiciesPackage',
        new Blob([JSON.stringify(spiciesPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < spiciesPackage.spiciesImages!.length; i++){
        formData.append(
          'imageFile',
          spiciesPackage.spiciesImages![i].file,
          spiciesPackage.spiciesImages![i].file.name
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

      this.spiciesPackage.spiciesImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.spiciesPackage.spiciesImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.spiciesPackage.spiciesImages!.push(rentFileHandle);
  }

}

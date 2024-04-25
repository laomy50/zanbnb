import { Component } from '@angular/core';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { BeachService } from '../../../../services/beach.service';
import { BeachPackage } from '../../../../model/beach-package';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css'
})
export class BeachComponent {

  beachPackage: BeachPackage = {
    beachName:"",
    beachPrice:"",
    beachLocation:"",
    beachImages:[],
  }
  
  constructor(private beachService:BeachService,
    private domSanitizer: DomSanitizer) { }

    addBeach(beachForm:NgForm){
      const beachPackageFormData = this.preparedFormData(this.beachPackage)
      this.beachService.addNewBeachPackage(beachPackageFormData).subscribe(
        (response:BeachPackage)=>{
          beachForm.reset();
          this.beachPackage.beachImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(beachPackage: BeachPackage): FormData {
      const formData = new FormData();

      formData.append(
        'beachPackage',
        new Blob([JSON.stringify(beachPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < beachPackage.beachImages!.length; i++){
        formData.append(
          'imageFile',
          beachPackage.beachImages![i].file,
          beachPackage.beachImages![i].file.name
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

      this.beachPackage.beachImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.beachPackage.beachImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.beachPackage.beachImages!.push(rentFileHandle);
  }


}

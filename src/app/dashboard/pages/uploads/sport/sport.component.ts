import { Component } from '@angular/core';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { DomSanitizer } from '@angular/platform-browser';
import { SportService } from '../../../../services/sport.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SportPackage } from '../../../../model/sport-package';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {

  
    
  sportPackage: SportPackage = {
    sportName:"",
    sportPrice:"",
    sportLocation:"",
    sportImages:[],
  }
  
  constructor(private sportService:SportService,
    private domSanitizer: DomSanitizer) { }

    addSport(sportForm:NgForm){
      const sportPackageFormData = this.preparedFormData(this.sportPackage)
      this.sportService.addNewSportPackage(sportPackageFormData).subscribe(
        (response:SportPackage)=>{
          sportForm.reset();
          this.sportPackage.sportImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(sportPackage: SportPackage): FormData {
      const formData = new FormData();

      formData.append(
        'sportPackage',
        new Blob([JSON.stringify(sportPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < sportPackage.sportImages!.length; i++){
        formData.append(
          'imageFile',
        sportPackage.sportImages![i].file,
        sportPackage.sportImages![i].file.name
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

      this.sportPackage.sportImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.sportPackage.sportImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.sportPackage.sportImages!.push(rentFileHandle);
  }


}

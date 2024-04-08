import { Component } from '@angular/core';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HistoricalService } from '../../../../services/historical.service';
import { HistoricalPackage } from '../../../../model/historical-package';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.css'
})
export class HistoricalComponent {

    
  historicalPackage: HistoricalPackage = {
    historicalName:"",
    historicalPrice:"",
    historicalLocation:"",
    historicalImages:[],
  }
  
  constructor(private historicalService:HistoricalService,
    private domSanitizer: DomSanitizer) { }

    addHotel(historicalForm:NgForm){
      const historicalPackageFormData = this.preparedFormData(this.historicalPackage)
      this.historicalService.addNewHistoricalPackage(historicalPackageFormData).subscribe(
        (response:HistoricalPackage)=>{
          historicalForm.reset();
          this.historicalPackage.historicalImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(historicalPackage: HistoricalPackage): FormData {
      const formData = new FormData();

      formData.append(
        'historicalPackage',
        new Blob([JSON.stringify(historicalPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < historicalPackage.historicalImages!.length; i++){
        formData.append(
          'imageFile',
          historicalPackage.historicalImages![i].file,
          historicalPackage.historicalImages![i].file.name
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

      this.historicalPackage.historicalImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.historicalPackage.historicalImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.historicalPackage.historicalImages!.push(rentFileHandle);
  }


}

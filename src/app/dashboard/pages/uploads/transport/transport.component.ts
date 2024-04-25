import { Component } from '@angular/core';
import { TransportService } from '../../../../services/transport.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RentFileHandle } from '../../../../model/rentFile_handle';
import { TransportPackage } from '../../../../model/transport-package';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export class TransportComponent {
  
  transportPackage: TransportPackage = {
    transportName:"",
    transportPrice:"",
    transportLocation:"",
    transportImages:[],
  }
  
  constructor(private transportService:TransportService
    ,
    private domSanitizer: DomSanitizer) { }

    addTransport(transportForm:NgForm){
      const transportPackageFormData = this.preparedFormData(this.transportPackage)
      this.transportService.addNewTransportPackage(transportPackageFormData).subscribe(
        (response:TransportPackage)=>{
          transportForm.reset();
          this.transportPackage.transportImages = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(transportPackage: TransportPackage): FormData {
      const formData = new FormData();

      formData.append(
        'transportPackage',
        new Blob([JSON.stringify(transportPackage)], {type: 'application/json'})
      );

      for(var i = 0; i < transportPackage.transportImages!.length; i++){
        formData.append(
          'imageFile',
          transportPackage.transportImages![i].file,
          transportPackage.transportImages![i].file.name
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

      this.transportPackage.transportImages!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.transportPackage.transportImages?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.transportPackage.transportImages!.push(rentFileHandle);
  }

}

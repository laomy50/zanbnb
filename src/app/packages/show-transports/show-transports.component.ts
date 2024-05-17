import { Component, Inject, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransportPackage } from '../../model/transport-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-transports',
  templateUrl: './show-transports.component.html',
  styleUrl: './show-transports.component.css'
})
export class ShowTransportsComponent implements OnInit{

  constructor(
    private transportService:TransportService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllTransportPackages();
  }

  getAllTransportPackages(){
    this.transportService.getAllTransportPackage().subscribe(
      (response:TransportPackage[]) =>{
        console.log(response);
      }, (error:HttpErrorResponse) =>{
         console.log(error);
      }
    );
  }

  receiveImages(){
    console.log(this.data);
  }

}

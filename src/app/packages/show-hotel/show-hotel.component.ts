import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { HotelPackage } from '../../model/hotel-package';
import { HotelService } from '../../services/hotel.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-show-hotel',
  templateUrl: './show-hotel.component.html',
  styleUrl: './show-hotel.component.css'
})
export class ShowHotelComponent implements OnInit{

  constructor(
    private hotelService:HotelService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllHotelPackages();
  }

  getAllHotelPackages(){
    this.hotelService.getAllHotelPackage().subscribe(
      (response:HotelPackage[]) =>{
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

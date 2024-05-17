import { Component, Inject, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TripPackage } from '../../model/trip-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-trips',
  templateUrl: './show-trips.component.html',
  styleUrl: './show-trips.component.css'
})
export class ShowTripsComponent implements OnInit{

  constructor(
    private tripService:TripService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllTripPackages();
  }

  getAllTripPackages(){
    this.tripService.getAllTripPackage().subscribe(
      (response:TripPackage[]) =>{
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

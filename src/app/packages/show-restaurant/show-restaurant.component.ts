import { Component, Inject, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantPackage } from '../../model/restaurant-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrl: './show-restaurant.component.css'
})
export class ShowRestaurantComponent implements OnInit{

  constructor(
    private restaurantService:RestaurantService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllRestaurantPackages();
  }

  getAllRestaurantPackages(){
    this.restaurantService.getAllRestaurantPackage().subscribe(
      (response:RestaurantPackage[]) =>{
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


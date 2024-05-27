import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrl: './restaurant-order.component.css'
})
export class RestaurantOrderComponent implements OnInit {
  restaurants: any[] = [];
  

  constructor(private restaurantService: RestaurantService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurantPackage()
    .subscribe(
      (data) => {
        this.restaurants = data.map(restaurant => this.imageProcessingService.createRestaurantImages(restaurant));
      },
      (error) => {
        console.error('Failed to fetch rents', error);
      }
    );
  }
}

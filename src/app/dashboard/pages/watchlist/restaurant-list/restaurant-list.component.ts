import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { RestaurantPackage } from '../../../../model/restaurant-package';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowRestaurantComponent } from '../../../../packages/show-restaurant/show-restaurant.component';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit{

  id:any;
  
  displayedColumns2: string[] = [
    'index',
    'restaurantName',
    'restaurantPrice',
    'restaurantLocation',
    'restaurantImages',
    // 'action'
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<RestaurantPackage>([]);


  constructor(private restaurantService:RestaurantService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllRestaurantPackages();
  }

// all rents
  public getAllRestaurantPackages() {
    this.restaurantService.getAllRestaurantPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:RestaurantPackage[], i ) => x.map((restaurantPackage:RestaurantPackage) => this.imageProcessingService.createRestaurantImages(restaurantPackage)))
    )
    .subscribe(
      (response: RestaurantPackage[]) => {
        this.dataSource2 = new MatTableDataSource(response);
        this.dataSource2.paginator = this.paginator2;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  applyFilterPayment(event: Event) {
    const filterValue = (event.target as HTMLInputElement)?.value?.trim().toLowerCase();
    this.dataSource2.filter = filterValue;
  }
  

  // rent 
  showImages(restaurantPackage:RestaurantPackage){
    console.log(restaurantPackage);
    this.imagesDialog.open(ShowRestaurantComponent,{
      data:{
          images:restaurantPackage.restaurantImages
      },
      height:'500px',
      width:'800px',
    });
  }

  delete(id:any){}

}

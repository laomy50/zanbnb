import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TripPackage } from '../../../../model/trip-package';
import { TripService } from '../../../../services/trip.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowTripsComponent } from '../../../../packages/show-trips/show-trips.component';


@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css'
})
export class TripsListComponent implements OnInit{

  id:any;
  
  displayedColumns2: string[] = [
    'index',
    'tripName',
    'tripPrice',
    'tripLocation',
    'tripImages',
    'action',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<TripPackage>([]);


  constructor(private tripService:TripService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllTripsPackages();
  }

// all rents
  public getAllTripsPackages() {
    this.tripService.getAllTripPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:TripPackage[], i ) => x.map((tripPackage:TripPackage) => this.imageProcessingService.createTripImages(tripPackage)))
    )
    .subscribe(
      (response: TripPackage[]) => {
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
  showImages(tripPackage:TripPackage){
    console.log(tripPackage);
    this.imagesDialog.open(ShowTripsComponent,{
      data:{
          images:tripPackage.tripImages
      },
      height:'500px',
      width:'800px',
    });
  }

  delete(id:any){
  
  }

}

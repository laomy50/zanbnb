import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HotelPackage } from '../../../../model/hotel-package';
import { HotelService } from '../../../../services/hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowHotelComponent } from '../../../../packages/show-hotel/show-hotel.component';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'hotelName',
    'hotelPrice',
    'hotelLocation',
    'hotelImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<HotelPackage>([]);


  constructor(private hotelService:HotelService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllHotelPackages();
  }

// all rents
  public getAllHotelPackages() {
    this.hotelService.getAllHotelPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:HotelPackage[], i ) => x.map((hotelPackage:HotelPackage) => this.imageProcessingService.createHotellImages(hotelPackage)))
    )
    .subscribe(
      (response: HotelPackage[]) => {
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
  showImages(hotelPackage:HotelPackage){
    console.log(hotelPackage);
    this.imagesDialog.open(ShowHotelComponent,{
      data:{
          images:hotelPackage.hotelImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

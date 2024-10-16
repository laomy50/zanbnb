import { Component, ViewChild } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { RentPackage } from '../../../model/rent-package';
import { ShowRentsComponent } from '../../../packages/show-rents/show-rents.component';
import { ImageProcessingService } from '../../../services/image-processing.service';

@Component({
  selector: 'app-allrents-orders',
  templateUrl: './allrents-orders.component.html',
  styleUrl: './allrents-orders.component.css'
})
export class AllrentsOrdersComponent {
  displayedColumns2: string[] = [
    'index',
    'name',
    'email',
    'address',
    'phone',
    'dateFrom',
    'dateTo',
    'numberOfAdults',
    
  ];

  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  dataSource2 = new MatTableDataSource<any>([]);

  constructor(private bookingService:BookingService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }

  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllRentOrders();
  }

  // all rents
  public getAllRentOrders() {
    this.bookingService.getAllRentBookings()
   
    .subscribe(
      (response: any[]) => {
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
  

  showImages(rentPackage:RentPackage){
    console.log(rentPackage);
    this.imagesDialog.open(ShowRentsComponent,{
      data:{
          images:rentPackage.rentImages
      },
      height:'500px',
      width:'800px',
    });
  }

}

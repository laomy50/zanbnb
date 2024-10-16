import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RentPackage } from '../../../model/rent-package';
import { ShowRentsComponent } from '../../../packages/show-rents/show-rents.component';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-allshop-orders',
  templateUrl: './allshop-orders.component.html',
  styleUrl: './allshop-orders.component.css'
})
export class AllshopOrdersComponent {
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

  ){

  }

  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllShopOrders();
  }

  // all rents
  public getAllShopOrders() {
    this.bookingService.getAllShoppingBookings()
   
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

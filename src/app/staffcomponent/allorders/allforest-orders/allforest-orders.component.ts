import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-allforest-orders',
  templateUrl: './allforest-orders.component.html',
  styleUrl: './allforest-orders.component.css'
})
export class AllforestOrdersComponent {
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
    this.getAllForestOrders();
  }

  // all rents
  public getAllForestOrders() {
    this.bookingService.getAllForestBookings()
   
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
  



}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-mytransportorder',
  templateUrl: './mytransportorder.component.html',
  styleUrl: './mytransportorder.component.css'
})
export class MytransportorderComponent {
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
    this.getMyTransportOrders();
  }

  // all rents
  public getMyTransportOrders() {
    const userData = sessionStorage.getItem('logged user');
    const userId = userData ? JSON.parse(userData).userId : null;
  
    if (userId) {
      this.bookingService.getTransportByUserId(userId).subscribe(
        (response: any[]) => {
          // Assign response to the data source for Material Table
          this.dataSource2 = new MatTableDataSource(response);
          this.dataSource2.paginator = this.paginator2;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching rent orders:', error);
        }
      );
    } else {
      console.error('Logged-in user data not found in sessionStorage');
    }
  }

  applyFilterPayment(event: Event) {
    const filterValue = (event.target as HTMLInputElement)?.value?.trim().toLowerCase();
    this.dataSource2.filter = filterValue;
  }
  



}

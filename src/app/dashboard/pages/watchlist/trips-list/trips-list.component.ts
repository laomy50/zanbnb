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
  
  displayedColumns2: string[] = [
    'index',
    'tripName',
    'tripPrice',
    'tripLocation',
    'tripImages',
    
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
    
    // if (filterValue !== undefined) {
    //   this.dataSource2.filter = filterValue;
    //   this.dataSource2.filterPredicate = (data: any, filter: string) => {
    //     const name = (data.customer?.individualInfo?.individualFullName ||
    //       data.customer?.businessInfo?.businessName || '').toLowerCase();
    //     const unit = (data.commercial?.identification ||
    //       data.residential?.identification ||
    //       data.openSpace?.identification || '').toLowerCase();
    //     const status = (data.status || '').toLowerCase();
    //     const invoices = (data.numUnpaidInvoices !== null ? data.numUnpaidInvoices.toString() : '').toLowerCase();
    //     const code = (data.customer?.customerCode || '').toLowerCase();
    //     const phone = ((data.customer?.individualInfo?.individualPhoneNumber1 ? data.customer?.individualInfo?.individualPhoneNumber1
    //                     + (data.customer?.individualInfo?.individualPhoneNumber2 ? ' / ' + data.customer?.individualInfo?.individualPhoneNumber2 : '') :
    //                     (data.customer?.businessInfo?.businessPhone ? data.customer?.businessInfo?.businessPhone : '')) || '').toLowerCase();
  
    //     return name.includes(filter) || unit.includes(filter) || status.includes(filter) || 
    //            invoices.includes(filter) || code.includes(filter) || phone.includes(filter);
    //   };
    // }
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


}

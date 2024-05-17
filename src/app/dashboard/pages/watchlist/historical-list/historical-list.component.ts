import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoricalService } from '../../../../services/historical.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HistoricalPackage } from '../../../../model/historical-package';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowHistoricalComponent } from '../../../../packages/show-historical/show-historical.component';


@Component({
  selector: 'app-historical-list',
  templateUrl: './historical-list.component.html',
  styleUrl: './historical-list.component.css'
})
export class HistoricalListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'historicalName',
    'historicalPrice',
    'historicalLocation',
    'historicalImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<HistoricalPackage>([]);


  constructor(private historicalService:HistoricalService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllHistoricalPackages();
  }

// all rents
  public getAllHistoricalPackages() {
    this.historicalService.getAllHistoricalPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:HistoricalPackage[], i ) => x.map((historicalPackage:HistoricalPackage) => this.imageProcessingService.createHistoricalImages(historicalPackage)))
    )
    .subscribe(
      (response: HistoricalPackage[]) => {
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
  showImages(historicalPackage:HistoricalPackage){
    console.log(historicalPackage);
    this.imagesDialog.open(ShowHistoricalComponent,{
      data:{
          images:historicalPackage.historicalImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

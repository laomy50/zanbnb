import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SportPackage } from '../../../../model/sport-package';
import { SportService } from '../../../../services/sport.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowSportsComponent } from '../../../../packages/show-sports/show-sports.component';


@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'sportName',
    'sportPrice',
    'sportLocation',
    'sportImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<SportPackage>([]);


  constructor(private sportService:SportService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllSportPackages();
  }

// all rents
  public getAllSportPackages() {
    this.sportService.getAllSportPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:SportPackage[], i ) => x.map((sportPackage:SportPackage) => this.imageProcessingService.createSportImages(sportPackage)))
    )
    .subscribe(
      (response: SportPackage[]) => {
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
  showImages(sportPackage:SportPackage){
    console.log(sportPackage);
    this.imagesDialog.open(ShowSportsComponent,{
      data:{
          images:sportPackage.sportImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SpiciesPackage } from '../../../../model/spicies-package';
import { MatTableDataSource } from '@angular/material/table';
import { SpiciesService } from '../../../../services/spicies.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowSpiciesComponent } from '../../../../packages/show-spicies/show-spicies.component';


@Component({
  selector: 'app-spice-list',
  templateUrl: './spice-list.component.html',
  styleUrl: './spice-list.component.css'
})
export class SpiceListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'spiciesName',
    'spiciesPrice',
    'spiciesLocation',
    'spiciesImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<SpiciesPackage>([]);


  constructor(private spiciesService:SpiciesService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllSpiciesPackages();
  }

// all rents
  public getAllSpiciesPackages() {
    this.spiciesService.getAllSpiciesPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:SpiciesPackage[], i ) => x.map((spiciesPackage:SpiciesPackage) => this.imageProcessingService.createSpiciesImages(spiciesPackage)))
    )
    .subscribe(
      (response: SpiciesPackage[]) => {
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
  showImages(spiciesPackage:SpiciesPackage){
    console.log(spiciesPackage);
    this.imagesDialog.open(ShowSpiciesComponent,{
      data:{
          images:spiciesPackage.spiciesImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

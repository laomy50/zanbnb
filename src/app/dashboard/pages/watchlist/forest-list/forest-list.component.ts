import { Component, OnInit, ViewChild } from '@angular/core';
import { ForestService } from '../../../../services/forest.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ForestPackage } from '../../../../model/forest-package';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowForestsComponent } from '../../../../packages/show-forests/show-forests.component';


@Component({
  selector: 'app-forest-list',
  templateUrl: './forest-list.component.html',
  styleUrl: './forest-list.component.css'
})
export class ForestListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'forestName',
    'forestPrice',
    'forestLocation',
    'forestImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<ForestPackage>([]);


  constructor(private forestService:ForestService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllForestPackages();
  }

// all rents
  public getAllForestPackages() {
    this.forestService.getAllForestPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:ForestPackage[], i ) => x.map((forestPackage:ForestPackage) => this.imageProcessingService.createForestImages(forestPackage)))
    )
    .subscribe(
      (response: ForestPackage[]) => {
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
  showImages(forestPackage:ForestPackage){
    console.log(forestPackage);
    this.imagesDialog.open(ShowForestsComponent,{
      data:{
          images:forestPackage.forestImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

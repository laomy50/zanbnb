import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RentPackage } from '../../../../model/rent-package';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { RentPackageService } from '../../../../services/rent-package.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowRentsComponent } from '../../../../packages/show-rents/show-rents.component';

@Component({
  selector: 'app-rents-list',
  templateUrl: './rents-list.component.html',
  styleUrl: './rents-list.component.css'
})
export class RentsListComponent {

  displayedColumns2: string[] = [
    'index',
    'rentName',
    'rentPrice',
    'rentLocation',
    'rentImages',
    
  ];

  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  dataSource2 = new MatTableDataSource<RentPackage>([]);

  constructor(private rentPackageService:RentPackageService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }

  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllRentPackages();
  }

  // all rents
  public getAllRentPackages() {
    this.rentPackageService.getAllRentPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:RentPackage[], i ) => x.map((rentPackage:RentPackage) => this.imageProcessingService.createRentImages(rentPackage)))
    )
    .subscribe(
      (response: RentPackage[]) => {
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

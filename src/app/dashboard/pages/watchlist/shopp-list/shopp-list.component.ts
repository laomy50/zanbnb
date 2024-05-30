import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingPackage } from '../../../../model/shopp-package';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppPackageService } from '../../../../services/shopp-package.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { ShowShoppComponent } from '../../../../packages/show-shopp/show-shopp.component';

@Component({
  selector: 'app-shopp-list',
  templateUrl: './shopp-list.component.html',
  styleUrl: './shopp-list.component.css'
})
export class ShoppListComponent {

  displayedColumns3: string[] = [
    'index',
    'shoppingName',
    'shoppingPrice',
    'shoppingLocation',
    'shoppingImages',
    
  ];

  @ViewChild(MatPaginator) paginator3!: MatPaginator;
  dataSource3 = new MatTableDataSource<ShoppingPackage>([]);

  constructor(
    private shoppPackageService:ShoppPackageService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }

  ngOnInit(): void {
    this.dataSource3.paginator = this.paginator3;
    this.getAllShoppingPackages();
  }

  // all shopping
getAllShoppingPackages(){
  this.shoppPackageService.getAllShoppingPackage()
  .pipe(
    // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
    map((x:ShoppingPackage[], i ) => x.map((shoppingPackage:ShoppingPackage) => this.imageProcessingService.createShoppImages(shoppingPackage)))
  )
  .subscribe(
    (response: ShoppingPackage[]) => {
      this.dataSource3 = new MatTableDataSource(response);
      this.dataSource3.paginator = this.paginator3;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
}

applyFilterPayment(event: Event) {
  const filterValue = (event.target as HTMLInputElement)?.value?.trim().toLowerCase();
  this.dataSource3.filter = filterValue;
}


  // shopp
  showShoppImages(shoppingPackage:ShoppingPackage){
    console.log(shoppingPackage);
    this.imagesDialog.open(ShowShoppComponent,{
      data:{
          images:shoppingPackage.shoppingImages
      },
      height:'500px',
      width:'800px',
    });
  }

}

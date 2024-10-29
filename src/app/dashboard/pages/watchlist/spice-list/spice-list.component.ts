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

  id:any;
  
  displayedColumns2: string[] = [
    'index',
    'spiciesName',
    'spiciesPrice',
    'spiciesLocation',
    'spiciesImages',
    'action',
    
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
    this.dataSource2.filter = filterValue;
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

  delete(id:any){}

}

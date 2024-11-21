import { Component, OnInit, ViewChild } from '@angular/core';
import { BeachService } from '../../../../services/beach.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BeachPackage } from '../../../../model/beach-package';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowBeachesComponent } from '../../../../packages/show-beaches/show-beaches.component';


@Component({
  selector: 'app-beach-list',
  templateUrl: './beach-list.component.html',
  styleUrl: './beach-list.component.css'
})
export class BeachListComponent implements OnInit{

  id:any;
  
  displayedColumns2: string[] = [
    'index',
    'beachName',
    'beachPrice',
    'beachLocation',
    'beachImages',
    // 'action',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<BeachPackage>([]);


  constructor(private beachService:BeachService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllBeachPackages();
  }

// all rents
  public getAllBeachPackages() {
    this.beachService.getAllBeachPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:BeachPackage[], i ) => x.map((beachPackage:BeachPackage) => this.imageProcessingService.createBeachImages(beachPackage)))
    )
    .subscribe(
      (response: BeachPackage[]) => {
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
  showImages(beachPackage:BeachPackage){
    console.log(beachPackage);
    this.imagesDialog.open(ShowBeachesComponent,{
      data:{
          images:beachPackage.beachImages
      },
      height:'500px',
      width:'800px',
    });
  }

  delete(id:any){

  }


}

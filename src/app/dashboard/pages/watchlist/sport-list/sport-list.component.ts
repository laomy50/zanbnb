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
    this.dataSource2.filter = filterValue;
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

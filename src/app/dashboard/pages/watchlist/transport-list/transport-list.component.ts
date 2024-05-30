import { Component, OnInit, ViewChild } from '@angular/core';
import { TransportService } from '../../../../services/transport.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransportPackage } from '../../../../model/transport-package';
import { MatDialog } from '@angular/material/dialog';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ShowTransportsComponent } from '../../../../packages/show-transports/show-transports.component';


@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrl: './transport-list.component.css'
})
export class TransportListComponent implements OnInit{
  
  displayedColumns2: string[] = [
    'index',
    'transportName',
    'transportPrice',
    'transportLocation',
    'transportImages',
    
  ];


  @ViewChild(MatPaginator) paginator2!: MatPaginator;
  // dataSource2: RentPackage[] = [];
  dataSource2 = new MatTableDataSource<TransportPackage>([]);


  constructor(private transportService:TransportService,
    public imagesDialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
  ){

  }
  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator2;
    this.getAllTransportPackages();
  }

// all rents
  public getAllTransportPackages() {
    this.transportService.getAllTransportPackage()
    .pipe(
      // the first pipe(map) will take all images in array and the second will take only one selected inthe list of array
      map((x:TransportPackage[], i ) => x.map((transportPackage:TransportPackage) => this.imageProcessingService.createTransportImages(transportPackage)))
    )
    .subscribe(
      (response: TransportPackage[]) => {
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
  showImages(transportPackage:TransportPackage){
    console.log(transportPackage);
    this.imagesDialog.open(ShowTransportsComponent,{
      data:{
          images:transportPackage.transportImages
      },
      height:'500px',
      width:'800px',
    });
  }


}

import { Component, Inject, OnInit } from '@angular/core';
import { HistoricalService } from '../../services/historical.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoricalPackage } from '../../model/historical-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-historical',
  templateUrl: './show-historical.component.html',
  styleUrl: './show-historical.component.css'
})
export class ShowHistoricalComponent implements OnInit{

  constructor(
    private historicalService:HistoricalService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllHistoricalPackages();
  }

  getAllHistoricalPackages(){
    this.historicalService.getAllHistoricalPackage().subscribe(
      (response:HistoricalPackage[]) =>{
        console.log(response);
      }, (error:HttpErrorResponse) =>{
         console.log(error);
      }
    );
  }

  receiveImages(){
    console.log(this.data);
  }

}

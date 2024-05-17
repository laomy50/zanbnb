import { Component, Inject, OnInit } from '@angular/core';
import { ForestService } from '../../services/forest.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForestPackage } from '../../model/forest-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-forests',
  templateUrl: './show-forests.component.html',
  styleUrl: './show-forests.component.css'
})
export class ShowForestsComponent implements OnInit{

  constructor(
    private forestService:ForestService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllForestPackages();
  }

  getAllForestPackages(){
    this.forestService.getAllForestPackage().subscribe(
      (response:ForestPackage[]) =>{
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

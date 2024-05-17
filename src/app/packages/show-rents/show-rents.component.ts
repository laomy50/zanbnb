import { Component, Inject, OnInit } from '@angular/core';
import { RentPackageService } from '../../services/rent-package.service';
import { RentPackage } from '../../model/rent-package';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog ,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from 'fs/promises';
import { RentFileHandle } from '../../model/rentFile_handle';

@Component({
  selector: 'app-show-rents',
  templateUrl: './show-rents.component.html',
  styleUrl: './show-rents.component.css'
})
export class ShowRentsComponent implements OnInit{

  constructor(
    private rentPackageService:RentPackageService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllRentPackages();
  }

  getAllRentPackages(){
    this.rentPackageService.getAllRentPackage().subscribe(
      (response:RentPackage[]) =>{
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

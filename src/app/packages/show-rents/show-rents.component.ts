import { Component, OnInit } from '@angular/core';
import { RentPackageService } from '../../services/rent-package.service';
import { RentPackage } from '../../model/rent-package';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show-rents',
  templateUrl: './show-rents.component.html',
  styleUrl: './show-rents.component.css'
})
export class ShowRentsComponent implements OnInit{

  constructor(
    private rentPackageService:RentPackageService,
  ){

  }
  ngOnInit(): void {
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

}

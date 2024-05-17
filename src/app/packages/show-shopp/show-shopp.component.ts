import { Component, Inject, OnInit } from '@angular/core';
import { ShoppPackageService } from '../../services/shopp-package.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentPackage } from '../../model/rent-package';
import { ShoppingPackage } from '../../model/shopp-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-shopp',
  templateUrl: './show-shopp.component.html',
  styleUrl: './show-shopp.component.css'
})
export class ShowShoppComponent implements OnInit{

  constructor(
    private shoppPackageService:ShoppPackageService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllShoppPackages();
  }

  getAllShoppPackages(){
    this.shoppPackageService.getAllShoppingPackage().subscribe(
      (response:ShoppingPackage[]) =>{
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

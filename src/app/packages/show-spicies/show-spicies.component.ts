import { Component, Inject, OnInit } from '@angular/core';
import { SpiciesService } from '../../services/spicies.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpiciesPackage } from '../../model/spicies-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-spicies',
  templateUrl: './show-spicies.component.html',
  styleUrl: './show-spicies.component.css'
})
export class ShowSpiciesComponent implements OnInit{

  constructor(
    private spiciesService:SpiciesService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllSpiciesPackages();
  }

  getAllSpiciesPackages(){
    this.spiciesService.getAllSpiciesPackage().subscribe(
      (response:SpiciesPackage[]) =>{
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


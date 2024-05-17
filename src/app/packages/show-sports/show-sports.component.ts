import { Component, Inject, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SportPackage } from '../../model/sport-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-sports',
  templateUrl: './show-sports.component.html',
  styleUrl: './show-sports.component.css'
})
export class ShowSportsComponent implements OnInit{

  constructor(
    private sportService:SportService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllSportPackages();
  }

  getAllSportPackages(){
    this.sportService.getAllSportPackage().subscribe(
      (response:SportPackage[]) =>{
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


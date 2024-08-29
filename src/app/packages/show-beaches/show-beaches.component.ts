import { Component, Inject, OnInit } from '@angular/core';
import { BeachService } from '../../services/beach.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeachPackage } from '../../model/beach-package';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-show-beaches',
  templateUrl: './show-beaches.component.html',
  styleUrl: './show-beaches.component.css'
})
export class ShowBeachesComponent implements OnInit{

  constructor(
    private beachService:BeachService,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
  ){

  }
  ngOnInit(): void {
    this.receiveImages();
    this.getAllBeachesPackages();
  }

  getAllBeachesPackages(){
    this.beachService.getAllBeachPackage().subscribe(
      (response:BeachPackage[]) =>{
        console.log(response);
      }, (error:HttpErrorResponse) =>{
         console.log(error);
      }
    );
  }

  receiveImages(){
    console.log(this.data);
  }

    // view
    toggleImageSize(event: Event) {
      const imgElement = event.target as HTMLImageElement;
      if (imgElement.classList.contains('enlarged')) {
        imgElement.classList.remove('enlarged');
      } else {
        this.resetEnlargedImages();
        imgElement.classList.add('enlarged');
      }
    }
  
    private resetEnlargedImages() {
      const enlargedImages = document.querySelectorAll('.enlarged');
      enlargedImages.forEach(img => img.classList.remove('enlarged'));
    }

}

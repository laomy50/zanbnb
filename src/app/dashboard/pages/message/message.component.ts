import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NewsService } from '../../../services/news/news.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { RentFileHandle } from '../../../model/rentFile_handle';

import { News } from '../../../model/news';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent  {

  news: News = {
    title:"",
    content:"",
    date:"",
    images:[],
  }
  newsForm!: NgForm;
  
  constructor(private newsService:NewsService,
    private domSanitizer: DomSanitizer) { }

    addNews(newsForm:NgForm){
      const newsFormData = this.preparedFormData(this.news)
      this.newsService.createNews(newsFormData).subscribe(
        (response:News)=>{
          newsForm.reset();
          this.news.images = [];
        },
        (error:HttpErrorResponse) =>{
          console.log(error);
        }
      );
    }

    preparedFormData(news: News): FormData {
      const formData = new FormData();

      formData.append(
        'news',
        new Blob([JSON.stringify(news)], {type: 'application/json'})
      );

      for(var i = 0; i < news.images!.length; i++){
        formData.append(
          'imageFile',
          news.images![i].file,
          news.images![i].file.name
        );
      }

      return formData;
  }

  onFileSelected(event: any){
    if(event.target.files){
      const file = event.target.files[0];

      const rentFileHandle: RentFileHandle = {
          file: file,
          url:  this.domSanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
      }

      this.news.images!.push(rentFileHandle);
    }
  }

  removeImages(i:any){
    this.news.images?.splice(i,1)
  }

  fileDropped(rentFileHandle:RentFileHandle){
    this.news.images!.push(rentFileHandle);
  }


}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NewsService } from '../../services/news/news.service';
import { ImageProcessingService } from '../../services/image-processing.service';
import { News } from '../../model/news';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrl: './newsdetails.component.css'
})
export class NewsdetailsComponent implements OnInit {
  newsList: any[] = [];
  selectedDate!: any; 
  errorMessage: string = '';

  constructor(private newsService: NewsService, private dialog: MatDialog,
    private imageProcessingService:ImageProcessingService,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.loadNewsByDate();

    this.newsService.getAllNews()
    .subscribe(
      (data) => {
        this.newsList = data.map(news => this.imageProcessingService.createNewsImages(news));
        console.log(data);
      },
      (error) => {
        console.error('Failed to fetch rents', error);
      }
    );
  }

  loadNewsByDate(): void {
    if (this.selectedDate) {
      this.newsService.getNewsByDate(this.selectedDate).subscribe({
        next: (news) => {
          this.newsList = news.map(news => this.imageProcessingService.createNewsImages(news));
          console.log(news);
        },
        error: (err) => {
          console.error('Error fetching news:', err);
        },
      });
    }
  }

  }
  




import { Component, OnInit } from '@angular/core';
import { BeachService } from '../../../../services/beach.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';

@Component({
  selector: 'app-beach-order',
  templateUrl: './beach-order.component.html',
  styleUrl: './beach-order.component.css'
})
export class BeachOrderComponent implements OnInit {
  beaches: any[] = [];
  

  constructor(private beachService: BeachService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.beachService.getAllBeachPackage()
    .subscribe(
      (data) => {
        this.beaches = data.map(beach => this.imageProcessingService.createBeachImages(beach));
      },
      (error) => {
        console.error('Failed to fetch forests', error);
      }
    );
  }
}

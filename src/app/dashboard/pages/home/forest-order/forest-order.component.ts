import { Component, OnInit } from '@angular/core';
import { ForestService } from '../../../../services/forest.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';

@Component({
  selector: 'app-forest-order',
  templateUrl: './forest-order.component.html',
  styleUrl: './forest-order.component.css'
})
export class ForestOrderComponent implements OnInit {
  forests: any[] = [];
  

  constructor(private forestService: ForestService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.forestService.getAllForestPackage()
    .subscribe(
      (data) => {
        this.forests = data.map(forest => this.imageProcessingService.createForestImages(forest));
      },
      (error) => {
        console.error('Failed to fetch forests', error);
      }
    );
  }
}

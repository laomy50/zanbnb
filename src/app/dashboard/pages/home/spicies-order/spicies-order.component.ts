import { Component, OnInit } from '@angular/core';
import { SpiciesService } from '../../../../services/spicies.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';

@Component({
  selector: 'app-spicies-order',
  templateUrl: './spicies-order.component.html',
  styleUrl: './spicies-order.component.css'
})
export class SpiciesOrderComponent  implements OnInit {
  spicies: any[] = [];
  

  constructor(private spiciesService: SpiciesService,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.spiciesService.getAllSpiciesPackage()
    .subscribe(
      (data) => {
        this.spicies = data.map(spice => this.imageProcessingService.createSpiciesImages(spice));
      },
      (error) => {
        console.error('Failed to fetch spicies', error);
      }
    );
  }
}

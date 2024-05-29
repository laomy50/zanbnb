import { Component, OnInit } from '@angular/core';
import { BeachService } from '../../../../services/beach.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beach-order',
  templateUrl: './beach-order.component.html',
  styleUrl: './beach-order.component.css'
})
export class BeachOrderComponent implements OnInit {
  beaches: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private beachService: BeachService,
    private modalService: NgbModal,
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

  bookNow(){}
}

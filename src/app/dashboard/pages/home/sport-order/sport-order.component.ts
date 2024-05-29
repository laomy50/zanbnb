import { Component, OnInit } from '@angular/core';
import { SportService } from '../../../../services/sport.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sport-order',
  templateUrl: './sport-order.component.html',
  styleUrl: './sport-order.component.css'
})
export class SportOrderComponent implements OnInit {
  sports: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private sportService: SportService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.sportService.getAllSportPackage()
    .subscribe(
      (data) => {
        this.sports = data.map(sport => this.imageProcessingService.createSportImages(sport));
      },
      (error) => {
        console.error('Failed to fetch sports', error);
      }
    );
  }

  bookNow(){}
}


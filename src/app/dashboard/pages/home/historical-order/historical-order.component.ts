import { Component, OnInit } from '@angular/core';
import { HistoricalService } from '../../../../services/historical.service';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-historical-order',
  templateUrl: './historical-order.component.html',
  styleUrl: './historical-order.component.css'
})
export class HistoricalOrderComponent implements OnInit {
  historicals: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private historicalService: HistoricalService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.historicalService.getAllHistoricalPackage()
    .subscribe(
      (data) => {
        this.historicals = data.map(historical => this.imageProcessingService.createHistoricalImages(historical));
      },
      (error) => {
        console.error('Failed to fetch historicals', error);
      }
    );
  }

  bookNow(){}
}

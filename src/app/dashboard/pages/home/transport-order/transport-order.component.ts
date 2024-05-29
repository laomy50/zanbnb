import { Component, OnInit } from '@angular/core';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TransportService } from '../../../../services/transport.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transport-order',
  templateUrl: './transport-order.component.html',
  styleUrl: './transport-order.component.css'
})
export class TransportOrderComponent implements OnInit {
  transports: any[] = [];
propertyForm!: FormGroup<any>;
  

  constructor(private transportService: TransportService,
    private modalService: NgbModal,
    private imageProcessingService:ImageProcessingService,
  ) { }

  ngOnInit(): void {
    this.transportService.getAllTransportPackage()
    .subscribe(
      (data) => {
        this.transports = data.map(transport => this.imageProcessingService.createTransportImages(transport));
      },
      (error) => {
        console.error('Failed to fetch transport', error);
      }
    );
  }

  bookNow(){}
}


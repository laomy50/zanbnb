import { Component, OnInit } from '@angular/core';
import { ImageProcessingService } from '../../../../services/image-processing.service';
import { TransportService } from '../../../../services/transport.service';

@Component({
  selector: 'app-transport-order',
  templateUrl: './transport-order.component.html',
  styleUrl: './transport-order.component.css'
})
export class TransportOrderComponent implements OnInit {
  transports: any[] = [];
  

  constructor(private transportService: TransportService,
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
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RentPackageService } from '../../../services/rent-package.service';
import { response } from 'express';
import { RentPackage } from '../../../model/rent-package';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowRentsComponent } from '../../../packages/show-rents/show-rents.component';
import { ImageProcessingService } from '../../../services/image-processing.service';
import { map } from 'rxjs';
import { ShoppPackageService } from '../../../services/shopp-package.service';
import { ShoppingPackage } from '../../../model/shopp-package';
import { ShowShoppComponent } from '../../../packages/show-shopp/show-shopp.component';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {}
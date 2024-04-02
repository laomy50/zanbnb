import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RentPackage } from '../model/rent-package';

@Injectable({
  providedIn: 'root'
})
export class RentPackageService {

  private baseUrl = environment.baseUrl + '/rentPackage';

  constructor(private httpClient: HttpClient) { }

  addRentPackage(rentPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewRentPackage` ,rentPackage);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RentPackage } from '../model/rent-package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentPackageService {

  private baseUrl = environment.baseUrl + '/rentPackage';

  constructor(private httpClient: HttpClient) { }

  addRentPackage(rentPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewRentPackage` ,rentPackage);
  }

  getAllRentPackage():Observable<any[]>{
     return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllRentPackages`);
  }


  

}

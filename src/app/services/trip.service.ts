import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseUrl = environment.baseUrl + '/tripPackage';

  constructor(private httpClient: HttpClient) { }

  addNewTripPackage(tripPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewTripPackage` ,tripPackage);
  }

  getAllTripPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllTripPackages`);
 }

 deleteTripPackage(tripPackageId:any):Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${tripPackageId}`);
 }

}

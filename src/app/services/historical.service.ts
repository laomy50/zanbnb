import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  private baseUrl = environment.baseUrl + '/historicalPackage';

  constructor(private httpClient: HttpClient) { }

  addNewHistoricalPackage(historicalPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewHistoricalPackage` ,historicalPackage);
  }

  getAllHistoricalPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllHistoricalPackages`);
 }
}

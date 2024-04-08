import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  private baseUrl = environment.baseUrl + '/historicalPackage';

  constructor(private httpClient: HttpClient) { }

  addNewHistoricalPackage(historicalPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewHistoricalPackage` ,historicalPackage);
  }
}

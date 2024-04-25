import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ForestService {

  private baseUrl = environment.baseUrl + '/forestPackage';

  constructor(private httpClient: HttpClient) { }

  addNewForestPackage(forestPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewForestPackage` ,forestPackage);
  }
}

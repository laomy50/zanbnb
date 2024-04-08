import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpiciesService {

  private baseUrl = environment.baseUrl + '/spiciesPackage';

  constructor(private httpClient: HttpClient) { }

  addNewSpiciesPackage(spiciesPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewSpiciesPackage` ,spiciesPackage);
  }
}

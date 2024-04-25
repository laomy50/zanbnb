import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BeachService {

  private baseUrl = environment.baseUrl + '/beachPackage';

  constructor(private httpClient: HttpClient) { }

  addNewBeachPackage(beachPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewBeachPackage` ,beachPackage);
  }
}

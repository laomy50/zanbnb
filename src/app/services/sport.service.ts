import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private baseUrl = environment.baseUrl + '/sportPackage';

  constructor(private httpClient: HttpClient) { }

  addNewSportPackage(sportPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewSportPackage` ,sportPackage);
  }
}

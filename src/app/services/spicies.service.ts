import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpiciesService {

  private baseUrl = environment.baseUrl + '/spiciesPackage';

  constructor(private httpClient: HttpClient) { }

  addNewSpiciesPackage(spiciesPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewSpiciesPackage` ,spiciesPackage);
  }

  getAllSpiciesPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllSpicePackages`);
 }
}

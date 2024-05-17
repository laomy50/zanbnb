import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  
  private baseUrl = environment.baseUrl + '/transportPackage';

  constructor(private httpClient: HttpClient) { }

  addNewTransportPackage(transportPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewTransportPackage` ,transportPackage);
  }

  getAllTransportPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllTransportPackages`);
 }
}

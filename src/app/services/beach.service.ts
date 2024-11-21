import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeachService {

  private baseUrl = environment.baseUrl + '/beachPackage';

  constructor(private httpClient: HttpClient) { }

  addNewBeachPackage(beachPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewBeachPackage` ,beachPackage);
  }

  getAllBeachPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllBeachPackages`);
 }

 deleteBeachPackage(beachPackageId:any):Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${beachPackageId}`);
 }
}

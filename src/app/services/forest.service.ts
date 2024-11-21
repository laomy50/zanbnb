import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForestService {

  private baseUrl = environment.baseUrl + '/forestPackage';

  constructor(private httpClient: HttpClient) { }

  addNewForestPackage(forestPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewForestPackage` ,forestPackage);
  }

  getAllForestPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllForestPackages`);
 }

 deleteForestPackage(forestPackageId:any):Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${forestPackageId}`);
 }

}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private baseUrl = environment.baseUrl + '/sportPackage';

  constructor(private httpClient: HttpClient) { }

  addNewSportPackage(sportPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewSportPackage` ,sportPackage);
  }

  getAllSportPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllSportPackages`);
 }

 deleteSportPackage(sportPackageId:any):Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${sportPackageId}`);
 }

}

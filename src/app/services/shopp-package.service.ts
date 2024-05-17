import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppPackageService {

  private baseUrl = environment.baseUrl + '/shoppPackage';

  constructor(private httpClient: HttpClient) { }

  addShoppingPackage(shoppingPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewShoppPackage` ,shoppingPackage);
  }

  getAllShoppingPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllShoppPackages`);
 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = environment.baseUrl + '/restaurantPackage';

  constructor(private httpClient: HttpClient) { }

  addNewRestaurantPackage(restaurantPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewRestaurantPackage` ,restaurantPackage);
  }

  getAllRestaurantPackage():Observable<any[]>{
    return  this.httpClient.get<any[]>(`${this.baseUrl}/getAllRestaurantPackages`);
 }
}

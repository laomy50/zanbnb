import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = environment.baseUrl + '/hotelPackage';

  constructor(private httpClient: HttpClient) { }

  addNewHotelPackage(hotelPackage:FormData){
    return this.httpClient.post(`${this.baseUrl}/addNewHotelPackage` ,hotelPackage);
  }
}

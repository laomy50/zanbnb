import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // BeachBooking API
  private baseUrl = environment.baseUrl + '/api/bookings';
  // end
  constructor(private http: HttpClient) { }

  // BeachBooking Methods
  createBeachBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookikingBeach`, bookingData);
  }

  getAllBeachBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  geBeachtBookingById(bookingId: number): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.get<any>(url);
  }

  updateBeachBooking(bookingId: number, updatedBooking: any): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.put<any>(url, updatedBooking);
  }

  // END
  
  
}

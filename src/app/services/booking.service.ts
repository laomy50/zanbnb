import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = environment.baseUrl + '/api/bookings';
  
  constructor(private http: HttpClient) { }

  createBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, bookingData);
  }

  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getBookingById(bookingId: number): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.get<any>(url);
  }

  updateBooking(bookingId: number, updatedBooking: any): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.put<any>(url, updatedBooking);
  }
  
}

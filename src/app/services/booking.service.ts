import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // RentBooking API
  private baseUrl = environment.baseUrl + '/api/bookingrent';
  // end
  // BeachBooking API
  private baseUrlB = environment.baseUrlB + '/api/bookings'
  // end
  // ForestBooking API
  private baseUrlF = environment.baseUrlF + '/api/bookingforest';
  // end
   // ForestBooking API
   private baseUrlHi = environment.baseUrlHi + '/api/bookinghistorical';
   // end
     // HotelBooking API
     private baseUrlHo = environment.baseUrlHo + '/api/bookinghotel';
     // end
        // RestaurantBooking API
        private baseUrlR = environment.baseUrlR + '/api/bookingrestaurant';
        // end
          // ShopBooking API
          private baseUrlSh = environment.baseUrlSh + '/api/bookingshopping';
          // end
            // SpiceBooking API
            private baseUrlSpi = environment.baseUrlSpi + '/api/bookingspice';
            // end
             // SportBooking API
             private baseUrlSpo = environment.baseUrlSpo + '/api/bookingsport';
             // end
              // TransportBooking API
              private baseUrlTra = environment.baseUrlTra + '/api/bookingtransport';
              // end
               // TripBooking API
               private baseUrlTri = environment.baseUrlTri + '/api/bookingtrip';
               // end

  constructor(private http: HttpClient) { }

        // TripBooking Method
        createTripBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrl}`, bookingData);
        }
      
        getAllTripBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrl);
        }
      
        getTripBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateTripBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

            // SpiceBooking Method
            createTransportBooking(bookingData: any): Observable<any> {
              return this.http.post(`${this.baseUrl}`, bookingData);
            }
          
            getAllTransportBookings(): Observable<any[]> {
              return this.http.get<any[]>(this.baseUrl);
            }
          
            getTransportBookingById(bookingId: number): Observable<any> {
              const url = `${this.baseUrl}/${bookingId}`;
              return this.http.get<any>(url);
            }
          
            updateTransportBooking(bookingId: number, updatedBooking: any): Observable<any> {
              const url = `${this.baseUrl}/${bookingId}`;
              return this.http.put<any>(url, updatedBooking);
            }
            // END

          // SpiceBooking Method
          createSportBooking(bookingData: any): Observable<any> {
            return this.http.post(`${this.baseUrl}`, bookingData);
          }
        
          getAllSportBookings(): Observable<any[]> {
            return this.http.get<any[]>(this.baseUrl);
          }
        
          getSportBookingById(bookingId: number): Observable<any> {
            const url = `${this.baseUrl}/${bookingId}`;
            return this.http.get<any>(url);
          }
        
          updateSportBooking(bookingId: number, updatedBooking: any): Observable<any> {
            const url = `${this.baseUrl}/${bookingId}`;
            return this.http.put<any>(url, updatedBooking);
          }
          // END

        // SpiceBooking Method
        createSpiceBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrl}`, bookingData);
        }
      
        getAllSpiceBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrl);
        }
      
        getSpiceBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateSpiceBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

        // ShoppingBooking Method
        createShoppingBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrl}`, bookingData);
        }
      
        getAllShoppingBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrl);
        }
      
        getShoppingBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateShoppingBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

          // RestaurantBooking Method
          createRestaurantBooking(bookingData: any): Observable<any> {
            return this.http.post(`${this.baseUrl}`, bookingData);
          }
        
          getAllRestaurantBookings(): Observable<any[]> {
            return this.http.get<any[]>(this.baseUrl);
          }
        
          getRestaurantBookingById(bookingId: number): Observable<any> {
            const url = `${this.baseUrl}/${bookingId}`;
            return this.http.get<any>(url);
          }
        
          updateRestaurantBooking(bookingId: number, updatedBooking: any): Observable<any> {
            const url = `${this.baseUrl}/${bookingId}`;
            return this.http.put<any>(url, updatedBooking);
          }
          // END

        // HotelBooking Method
        createHotelBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrl}`, bookingData);
        }
      
        getAllHotelBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrl);
        }
      
        getHotelBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateHotelBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrl}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

      // ForestBooking Method
      createHistoricalBooking(bookingData: any): Observable<any> {
        return this.http.post(`${this.baseUrl}`, bookingData);
      }
    
      getAllHistoricalBookings(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
      }
    
      getHistoricalBookingById(bookingId: number): Observable<any> {
        const url = `${this.baseUrl}/${bookingId}`;
        return this.http.get<any>(url);
      }
    
      updateHistoricalBooking(bookingId: number, updatedBooking: any): Observable<any> {
        const url = `${this.baseUrl}/${bookingId}`;
        return this.http.put<any>(url, updatedBooking);
      }
      // END

    // ForestBooking Method
    createForestBooking(bookingData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}`, bookingData);
    }
  
    getAllForestBookings(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    }
  
    getForestById(bookingId: number): Observable<any> {
      const url = `${this.baseUrl}/${bookingId}`;
      return this.http.get<any>(url);
    }
  
    updateForestBooking(bookingId: number, updatedBooking: any): Observable<any> {
      const url = `${this.baseUrl}/${bookingId}`;
      return this.http.put<any>(url, updatedBooking);
    }
  
    // END

  // BeachBooking Methods
  createBeachBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrlB}`, bookingData);
  }

  getAllBeachBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrlB);
  }

  geBeachtBookingById(bookingId: number): Observable<any> {
    const url = `${this.baseUrlB}/${bookingId}`;
    return this.http.get<any>(url);
  }

  updateBeachBooking(bookingId: number, updatedBooking: any): Observable<any> {
    const url = `${this.baseUrlB}/${bookingId}`;
    return this.http.put<any>(url, updatedBooking);
  }

  // END

  // RentBooking Method
  createRentBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, bookingData);
  }

  getAllRentBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  geBeachtRentById(bookingId: number): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.get<any>(url);
  }

  updateRentBooking(bookingId: number, updatedBooking: any): Observable<any> {
    const url = `${this.baseUrl}/${bookingId}`;
    return this.http.put<any>(url, updatedBooking);
  }

  // END
  
}

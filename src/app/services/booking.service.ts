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
          return this.http.post(`${this.baseUrlTri}`, bookingData);
        }
      
        getAllTripBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrlTri);
        }
      
        getTripBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrlTri}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateTripBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrlTri}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

            // SpiceBooking Method
            createTransportBooking(bookingData: any): Observable<any> {
              return this.http.post(`${this.baseUrlTra}`, bookingData);
            }
          
            getAllTransportBookings(): Observable<any[]> {
              return this.http.get<any[]>(this.baseUrlTra);
            }
          
            getTransportBookingById(bookingId: number): Observable<any> {
              const url = `${this.baseUrlTra}/${bookingId}`;
              return this.http.get<any>(url);
            }
          
            updateTransportBooking(bookingId: number, updatedBooking: any): Observable<any> {
              const url = `${this.baseUrlTra}/${bookingId}`;
              return this.http.put<any>(url, updatedBooking);
            }
            // END

          // SpiceBooking Method
          createSportBooking(bookingData: any): Observable<any> {
            return this.http.post(`${this.baseUrlSpo}`, bookingData);
          }
        
          getAllSportBookings(): Observable<any[]> {
            return this.http.get<any[]>(this.baseUrlSpo);
          }
        
          getSportBookingById(bookingId: number): Observable<any> {
            const url = `${this.baseUrlSpo}/${bookingId}`;
            return this.http.get<any>(url);
          }
        
          updateSportBooking(bookingId: number, updatedBooking: any): Observable<any> {
            const url = `${this.baseUrlSpo}/${bookingId}`;
            return this.http.put<any>(url, updatedBooking);
          }
          // END

        // SpiceBooking Method
        createSpiceBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrlSpi}`, bookingData);
        }
      
        getAllSpiceBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrlSpi);
        }
      
        getSpiceBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrlSpi}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateSpiceBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrlSpi}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

        // ShoppingBooking Method
        createShoppingBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrlSh}`, bookingData);
        }
      
        getAllShoppingBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrlSh);
        }
      
        getShoppingBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrlSh}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateShoppingBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrlSh}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

          // RestaurantBooking Method
          createRestaurantBooking(bookingData: any): Observable<any> {
            return this.http.post(`${this.baseUrlR}`, bookingData);
          }
        
          getAllRestaurantBookings(): Observable<any[]> {
            return this.http.get<any[]>(this.baseUrlR);
          }
        
          getRestaurantBookingById(bookingId: number): Observable<any> {
            const url = `${this.baseUrlR}/${bookingId}`;
            return this.http.get<any>(url);
          }
        
          updateRestaurantBooking(bookingId: number, updatedBooking: any): Observable<any> {
            const url = `${this.baseUrlR}/${bookingId}`;
            return this.http.put<any>(url, updatedBooking);
          }
          // END

        // HotelBooking Method
        createHotelBooking(bookingData: any): Observable<any> {
          return this.http.post(`${this.baseUrlHo}`, bookingData);
        }
      
        getAllHotelBookings(): Observable<any[]> {
          return this.http.get<any[]>(this.baseUrlHo);
        }
      
        getHotelBookingById(bookingId: number): Observable<any> {
          const url = `${this.baseUrlHo}/${bookingId}`;
          return this.http.get<any>(url);
        }
      
        updateHotelBooking(bookingId: number, updatedBooking: any): Observable<any> {
          const url = `${this.baseUrlHo}/${bookingId}`;
          return this.http.put<any>(url, updatedBooking);
        }
        // END

      // ForestBooking Method
      createHistoricalBooking(bookingData: any): Observable<any> {
        return this.http.post(`${this.baseUrlHi}`, bookingData);
      }
    
      getAllHistoricalBookings(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrlHi);
      }
    
      getHistoricalBookingById(bookingId: number): Observable<any> {
        const url = `${this.baseUrlHi}/${bookingId}`;
        return this.http.get<any>(url);
      }
    
      updateHistoricalBooking(bookingId: number, updatedBooking: any): Observable<any> {
        const url = `${this.baseUrlHi}/${bookingId}`;
        return this.http.put<any>(url, updatedBooking);
      }
      // END

    // ForestBooking Method
    createForestBooking(bookingData: any): Observable<any> {
      return this.http.post(`${this.baseUrlF}`, bookingData);
    }
  
    getAllForestBookings(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrlF);
    }
  
    getForestById(bookingId: number): Observable<any> {
      const url = `${this.baseUrlF}/${bookingId}`;
      return this.http.get<any>(url);
    }
  
    updateForestBooking(bookingId: number, updatedBooking: any): Observable<any> {
      const url = `${this.baseUrlF}/${bookingId}`;
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

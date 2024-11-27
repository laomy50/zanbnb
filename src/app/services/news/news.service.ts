import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { News } from '../../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = environment.baseUrl + '/api/news';

  constructor(private http: HttpClient,private datePipe: DatePipe) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getNewsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createNews(news: FormData) {
    return this.http.post<any>(`${this.apiUrl}/create`, news);
  }

  updateNews(id: number, news: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, news);
  }

  deleteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // getNewsByDate(date: any): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/filter-by-date`);
  // }

  getNewsByDate(date: any): Observable<any[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<any[]>(`${this.apiUrl}/filter-by-date`, { params });
  }

}
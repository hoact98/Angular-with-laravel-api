import { OrderDetail } from './../models/order-detail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private API_URL = "http://localhost:8000/api/order_details";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
  store(object: OrderDetail):Observable<OrderDetail>{
    return this.http.post<OrderDetail>(this.API_URL,object);
  }
  findById(id: any): Observable<OrderDetail>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<OrderDetail>(requestUrl);
  }

  remove(id: Number):Observable<OrderDetail>{
    return this.http.delete<OrderDetail>(`${this.API_URL}/${id}`);
  }
  removeMultiple(idList: any[]): Observable<any>{
    let requestUrls = idList.map(
      id => this.http.delete<any>(`${this.API_URL}/${id}`)
    );
    return forkJoin(requestUrls);
  }
}

import { Order } from './../models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_URL = "http://localhost:8000/api/orders";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
  store(object: Order):Observable<Order>{
    return this.http.post<Order>(this.API_URL,object);
  }
  findById(id: any): Observable<Order>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<Order>(requestUrl);
  }

  update(object: Order):Observable<Order>{
    let requestUrl = `${this.API_URL}/${object.id}`;
    return this.http.put<Order>(requestUrl,object);
  }

  remove(id: Number):Observable<Order>{
    return this.http.delete<Order>(`${this.API_URL}/${id}`);
  }
  removeMultiple(idList: any[]): Observable<any>{
    let requestUrls = idList.map(
      id => this.http.delete<any>(`${this.API_URL}/${id}`)
    );
    return forkJoin(requestUrls);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin  } from 'rxjs';
import { Book } from './../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
 private API_URL: string="http://localhost:8000/api/books";

  constructor(private http: HttpClient) { }

  getAll(keyword: any): Observable<any>{
    let requestUrl = `${this.API_URL}`;
    if(keyword.length > 0){
      requestUrl += `/search/${keyword}`;
    }
    return this.http.get<any>(requestUrl);
  }
  getBook(filter: any): Observable<any>{
    let requestUrl = this.API_URL;
    switch (filter.orderBy) {
      case "2":
      case "3":
      case "4":
      case "5": 
        requestUrl += `/order/${filter.orderBy}`;
        break;
      default:
        break;
    }
    if(filter.keyword.length > 0){
      requestUrl += `/search/${filter.keyword}`;
    }
    
    return this.http.get<any>(requestUrl);
  }
  getBookCate(filter: any,id): Observable<any>{
    let requestUrl = 'http://localhost:8000/api/bookCate/'+id;
    switch (filter.orderBy) {
      case "2":
      case "3":
      case "4":
      case "5": 
        requestUrl = `http://localhost:8000/api/bookCate/${id}/order/${filter.orderBy}`;
        break;
      default:
        // requestUrl += `/order/${filter.orderBy}`;
        break;
    }
    if(filter.keyword.length > 0){
      requestUrl = `http://localhost:8000/api/bookCate/${id}/search/${filter.keyword}`;
    }
    
    return this.http.get<any>(requestUrl);
  }
  findById(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<any>(requestUrl);
  }
  store(data,headers):Observable<Book>{
    return this.http.post<Book>(this.API_URL,data, {
      headers: headers
      });
  }
 
  update(data,headers):Observable<Book>{
    let requestUrl = `${this.API_URL}/${JSON.parse(data.get('data')).id}`;
    return this.http.post<Book>(requestUrl,data, {
      headers: headers
      });
  }
  remove(id: Number):Observable<Book>{
    return this.http.delete<Book>(`${this.API_URL}/${id}`);
  }
  removeMultiple(idList: any[]): Observable<any>{
    let requestUrls = idList.map(
      id => this.http.delete<any>(`${this.API_URL}/${id}`)
    );
    return forkJoin(requestUrls);
  }
}

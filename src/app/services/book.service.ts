import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookService {
 private bookApi: string="http://localhost:8000/api/books";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    let requestUrl = this.bookApi;
    return this.http.get<any>(requestUrl);
  }

  findById(id: string): Observable<any>{
    let requestUrl = `${this.bookApi}/${id}`;
    return this.http.get<any>(requestUrl);
  }
}

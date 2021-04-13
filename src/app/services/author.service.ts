import { Author } from './../models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private API_URL = "http://localhost:8000/api/authors";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
  store(object: Author):Observable<Author>{
    return this.http.post<Author>(this.API_URL,object);
  }
  findById(id: any): Observable<Author>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<Author>(requestUrl);
  }

  update(object: Author):Observable<Author>{
    let requestUrl = `${this.API_URL}/${object.id}`;
    return this.http.put<Author>(requestUrl,object);
  }

  remove(id: Number):Observable<Author>{
    return this.http.delete<Author>(`${this.API_URL}/${id}`);
  }
}

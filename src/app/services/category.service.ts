import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:8000/api/categories";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
  findById(id: any): Observable<Category>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<Category>(requestUrl);
  }

  store(object: Category):Observable<Category>{
    return this.http.post<Category>(this.API_URL,object);
  }
  
  update(object: Category):Observable<Category>{
    let requestUrl = `${this.API_URL}/${object.id}`;
    return this.http.put<Category>(requestUrl,object);
  }

  remove(id: Number):Observable<Category>{
    return this.http.delete<Category>(`${this.API_URL}/${id}`);
  }
}

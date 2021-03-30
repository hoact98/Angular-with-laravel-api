import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:8000/api/categories";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
}

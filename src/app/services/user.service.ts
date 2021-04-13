import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = "http://localhost:8000/api/users";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
  store(data,headers):Observable<User>{
    return this.http.post<User>(this.API_URL,data, {
      headers: headers
      });
  }

  update(data,headers):Observable<User>{
    let requestUrl = `${this.API_URL}/${JSON.parse(data.get('data')).id}`;
    return this.http.post<User>(requestUrl,data, {
      headers: headers
      });
  }
  findById(id: any): Observable<User>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.get<User>(requestUrl);
  }

  remove(id: Number):Observable<User>{
    return this.http.delete<User>(`${this.API_URL}/${id}`);
  }
   /**
     * POST LOGIN USER
     */
    login(user: any):Observable<any> {
      let requestUrl = `http://localhost:8000/api/login`;
      return this.http.post<any>(requestUrl, user,httpOptions)
          .pipe(map(user => {
              return user;
          }));
  }


}

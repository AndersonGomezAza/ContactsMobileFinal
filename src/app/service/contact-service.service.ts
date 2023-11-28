import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('https://randomuser.me/api/?results=20');
  }
}

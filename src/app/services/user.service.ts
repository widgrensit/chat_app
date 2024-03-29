import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    public fetchUsers() {
        return this.http.get<any>(`${environment.apiUrlClient}/user`);
    }

    public signup(username: string, password: string, email: string, phoneNumber: string) {
      return this.http.post<any>(`${environment.apiUrl}/signup`, {username: username,
                                                                  password: password,
                                                                  email: email,
                                                                  phoneNumber: phoneNumber})
   }
  }

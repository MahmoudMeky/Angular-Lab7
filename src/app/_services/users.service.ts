import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsers!: {};
  constructor(private http: HttpClient) { }


  getUsers(page: number = 1): any {
    return this.http.get(`https://www.mecallapi.com/api/users?page=${page}&per_page=5`)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {
  data: ["1000",
  "1001",
  "1002",
  "1003",
  "1004",
  "1005",
  "1006",
  "1007",
  "1008",
  "1009",
  "1010",
  "9999"]
 
  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    if (username === 'vishal' && password === 'vishal') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  getUserList() {
    return this.data;
}
  isUserLogedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

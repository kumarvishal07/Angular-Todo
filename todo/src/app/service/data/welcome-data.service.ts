import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class helloworld {
  constructor(public message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  exexuteHelloBeanService() {
    let basicAuth = this.basicAuthHeaderString();
    const headers = new HttpHeaders({
      Authorization: basicAuth
    });
    return this.http.get('http://localhost:8080/helloworld/hello', { headers : headers});
  }
  exexuteHelloBeanPathService(name) {
    let basicAuth = this.basicAuthHeaderString();
    const headers = new Headers({
      Authorization: basicAuth
    });
    return this.http.get('http://localhost:8080/helloworld/hello');
  }
  basicAuthHeaderString() {
    let user = "user";
    let pass = "password";
    let authStrin = 'Basic' + window.btoa(user + ':' + pass);
    return authStrin;
  }

}

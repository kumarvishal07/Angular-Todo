import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userData: any[] = [];

  lastkeydown1: number = 0;
  subscription: any;
  userList1 = [];
  constructor(private hardcoded: HardcodedAuthService, private http: HttpClient) {
    //Get the user data from users.json
    this.userList1 = this.hardcoded.getUserList();
  }

  ngOnInit() {
  }
  getUserIdsFirstWay($event) {
    console.log("hi"+ $event.get);
    let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
    this.userList1 = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.userData, userId);
      }
    }
  }

  searchFromArray(arr, regex) {
    let matches = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };
}



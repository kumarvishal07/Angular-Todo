import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-loin',
  templateUrl: './loin.component.html',
  styleUrls: ['./loin.component.css']
})
export class LoinComponent implements OnInit {

  username = 'vishal';
  password = '';
  errormsg = 'Invalid Credentials';
  invaliduser = false;
  constructor(private router: Router, private hadcodedAuth: HardcodedAuthService) { }

  ngOnInit() {
  }
  handleLogin() {
    if (this.hadcodedAuth.authenticate(this.username, this.password)) {
      this.invaliduser = false;
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.invaliduser = true;
    }
  }
}

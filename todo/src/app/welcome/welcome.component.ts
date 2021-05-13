import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  customizewelcomemessage: string;
  errormsg:string;
  constructor(private route: ActivatedRoute, private welcomeservice: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    console.log(this.welcomeservice.exexuteHelloBeanService().subscribe(

      response => (this.handleuccessMessgage(response)),
      error => this.errormethode(error)
    ));
  }
  getWelcomeMessageParamter() {
    console.log(this.welcomeservice.exexuteHelloBeanPathService(this.name).subscribe(

      response => (this.handleuccessMessgage(response)),
      error => this.errormethode(error)
    ));
  }
  handleuccessMessgage(response) {
    this.customizewelcomemessage = response;
  }
  errormethode(error){
    this.errormsg=error.error.message;
  }
}

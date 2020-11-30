import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './Authenticate.component.html',
  styleUrls: ['./Authenticate.component.css']
})
export class LoginComponent implements OnInit {
loginMode= false;
  constructor() { }

  ngOnInit(): void {
  }
  onSwitch(){
this.loginMode=!this.loginMode;



  }
}

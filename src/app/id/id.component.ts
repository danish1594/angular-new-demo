import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  constructor(private tokenservice:TokenService) { }

  ngOnInit(): void {
this.tokenservice.getToken();

  }

}

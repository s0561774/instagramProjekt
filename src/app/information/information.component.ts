import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  user:User = {
    emailOrphone:"tsougongpaulette@yahoo.fr",
    fullname: "Paulette Fokou",
    username:"Paulette_Fokou",
    password:"123456",
  }
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}

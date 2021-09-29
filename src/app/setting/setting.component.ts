import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  lon: number = 0;
  lat: number = 0;
 
  currPos:any;
  constructor(protected _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition( position=>{
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.currPos = this._sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q="+ this.lat + "," + this.lon + "&t=&z=15&ie=UTF8&iwloc=&output=embed");

      console.log(this.currPos)
    })
  }

}

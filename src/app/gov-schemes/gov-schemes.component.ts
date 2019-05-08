import { Component, OnInit } from '@angular/core';
import {FilterPipe } from '../filter.pipe';



@Component({
  selector: 'app-gov-schemes',
  templateUrl: './gov-schemes.component.html',
  styleUrls: ['./gov-schemes.component.scss']
})
export class GovSchemesComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  usersArray: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.usersArray=['Schemes for disabled:https://www.india.gov.in/topics/social-development/disabled','Unique disability ID',' Government facilities:http://latikaroy.org/government-facilities/','Scholarships available'];
    
  }

}

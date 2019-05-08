import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-to-go',
  templateUrl: './where-to-go.component.html',
  styleUrls: ['./where-to-go.component.scss']
})
export class WhereToGoComponent implements OnInit {
searchText:string="";
  constructor() { }

  ngOnInit() {
    if(this.searchText==""){
var text=<HTMLInputElement>(document.getElementById("searchText"));
var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
console.log("sf:"+placeUdupi);
placeUdupi.style.display='none';
var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
console.log("sf:"+placeHubli);
placeHubli.style.display='none';
    }
  }

  search(searchText){
if(searchText=='udupi')
{
 
  console.log("in udupi");
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
console.log("sf:"+placeUdupi);
placeUdupi.style.display='block';
}
else if(searchText=='manipal'){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
console.log("sf:"+placeUdupi);
placeUdupi.style.display='none';
var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
console.log("sf:"+placeHubli);
placeHubli.style.display='none';
  var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
  console.log("sf:"+placeManipal);
  placeManipal.style.display='block';
}
else if(searchText=='hubli'){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
console.log("sf:"+placeUdupi);
placeUdupi.style.display='none';
var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
  var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
  console.log("sf:"+placeHubli);
  placeHubli.style.display='block';
}
else{
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
  console.log("sf:"+placeUdupi);
  placeUdupi.style.display='none';
}
    console.log("here"+searchText);
  }

}

import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


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
var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
placeBantwal.style.display='none';
var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
placeMangalore.style.display='none';
    }
  }
  uppercase(value: string) {
    console.log("search text in uppercase"+value);
    var search=value.toUpperCase;
     console.log("search text"+search);
    return value.toUpperCase();
  }
  search(searchText){
    var udupistring = "udupi",
     manipalstring ="manipal",
     hublistring="hubli",
     udupistringg="UDUPI",
     manipalstringg ="MANIPAL",
     hublistringg="HUBLI",
     bantwalstring="bantwal",
     bantwalstringg="BANTWAL",
     mangalorestring="mangalore",
     mangalorestringg="MANGALORE",

    substring = "ud";

var searc=udupistring.includes(searchText);
    var search= this.uppercase(searchText);
          
    console.log("search text"+searc);

if( udupistring.includes(searchText)|| udupistringg.includes(searchText) )
{
 
  console.log("in udupi");
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
//console.log("sf:"+placeUdupi);
placeUdupi.style.display='block';
}
else if(manipalstring.includes(searchText) || manipalstringg.includes(searchText)){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
//console.log("sf:"+placeUdupi);
placeUdupi.style.display='none';
var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
console.log("sf:"+placeHubli);
placeHubli.style.display='none';
  var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
  console.log("sf:"+placeManipal);
  placeManipal.style.display='block';
  var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
  placeBantwal.style.display='none';
  var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
  placeMangalore.style.display='none';
}
else if( hublistring.includes(searchText)|| hublistringg.includes(searchText)){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
//console.log("sf:"+placeUdupi);
placeUdupi.style.display='none';
var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
  var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
  console.log("sf:"+placeHubli);
  placeHubli.style.display='block';
  var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
  placeBantwal.style.display='none';
  var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
  placeMangalore.style.display='none';
}
else if(bantwalstring.includes(searchText)|| bantwalstringg.includes(searchText)){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
  console.log("sf:"+placeUdupi);
  placeUdupi.style.display='none';
  var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
  var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
  console.log("sf:"+placeHubli);
  placeHubli.style.display='none';
  var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
placeBantwal.style.display='block';
var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
placeMangalore.style.display='none';
}
else if(mangalorestring.includes(searchText)|| mangalorestringg.includes(searchText)){
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
  console.log("sf:"+placeUdupi);
  placeUdupi.style.display='none';
  var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
  var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
  console.log("sf:"+placeHubli);
  placeHubli.style.display='none';
  var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
placeBantwal.style.display='none';
var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
placeMangalore.style.display='block';
}
else{
  var placeUdupi=<HTMLInputElement>(document.getElementById("matlistudupi"));
  console.log("sf:"+placeUdupi);
  placeUdupi.style.display='none';
  var placeManipal=<HTMLInputElement>(document.getElementById("matlistmanipal"));
placeManipal.style.display='none';
  var placeHubli=<HTMLInputElement>(document.getElementById("matlisthubli"));
  console.log("sf:"+placeHubli);
  placeHubli.style.display='none';
  var placeBantwal=<HTMLInputElement>(document.getElementById("matlistbantwal"));
placeBantwal.style.display='none';
var placeMangalore=<HTMLInputElement>(document.getElementById("matlistmangalore"));
placeMangalore.style.display='none';
}
    console.log("here"+searchText);
  }

}


import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
 
export class Quicknotes {
title: String ;
content: String ;
todo: String;
}

@Component({
selector: 'app-quicknotes',
templateUrl: './quicknotes.component.html',
styleUrls: ['./quicknotes.component.scss']
})
export class QuicknotesComponent implements OnInit {

titleModel: String;
contentModel: String;
todoModel: String;
quicknotes: Quicknotes[];

constructor() {
this.titleModel = '';
this.contentModel = '';
this.todoModel = '';

const defaultQuicknotes: Quicknotes = {
title: 'my note' ,
content : 'This is default note' ,
todo : ' this is the default time you want to your task done'
};

this.quicknotes = [ defaultQuicknotes ];
}
ngOnInit() {
}

createQuicknotes() {

const newQuicknotes: Quicknotes = {
title: this.titleModel ,
content : this.contentModel ,
todo : this.todoModel
};

this.quicknotes.push( newQuicknotes );

// set the model values to '' again
this.titleModel = this.todoModel = this.contentModel = '';
}

public capture(){
    //console.log("in here");
  //  document.getElementById('newnotebutton').style.display="none";
   // document.getElementById('removenotebutton').style.display="none";
    this.captureScreen();

}
public captureScreen()
{  
var data = document.getElementById('contentToConvert');

html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('checkMyMilestone.pdf'); // Generated PDF
});
//this.capturea();
}

public capturea(){
    console.log("in here");
    document.getElementById('newnotebutton').style.display="block";
   // document.getElementById('removenotebutton').style.display="block";
   // this.captureScreen();

}
textAreasList:any = [];

addTextarea(){        
    this.textAreasList.push('text_area'+ (this.textAreasList.length + 1));
}


removeTextArea(index){
    this.textAreasList.splice(index, 1);
}
}






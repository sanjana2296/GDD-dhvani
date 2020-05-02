
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-mile-stone',
  templateUrl: './mile-stone.component.html',
  styleUrls: ['./mile-stone.component.scss']
})
export class MileStoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    
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

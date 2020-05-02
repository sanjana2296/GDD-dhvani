import { Component, OnInit } from '@angular/core';
import {  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenchmarkComponent implements OnInit {
  title = 'app';
  text: string = '';
  openPopup: Function;

  setPopupAction(fn: any) {
    console.log('setPopupAction');
    this.openPopup = fn;
  }
  constructor() { }

  ngOnInit() {
  }

}

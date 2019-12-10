import { Component, OnInit } from '@angular/core';
import { Layout1 } from '../models/layout_1';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss', '../app.component.scss']
})
export class Layout1Component implements OnInit {
  layout1: Layout1 = new Layout1();
  constructor() { }

  setData(layout1Params: Layout1) {
    this.layout1 = layout1Params;
  };

  ngOnInit() {
  }

}
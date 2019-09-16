import { Component, OnInit } from '@angular/core';
import { Layout2 } from '../models/layout_2';
import { IComponentHost } from '../component-host.interface';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.scss','../app.component.scss']
})
export class Layout2Component implements OnInit, IComponentHost {
  layout2: Layout2 = new Layout2();
  constructor() { }

  setData(layout2Params: Layout2) {
    this.layout2 = layout2Params;
  };

  ngOnInit() {
  }
}
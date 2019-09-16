import { Component, OnInit } from '@angular/core';
import { IComponentHost } from '../component-host.interface';
import { Layout3 } from '../models/layout_3';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.scss','../app.component.scss']
})
export class Layout3Component implements OnInit, IComponentHost {
  layout3: Layout3 = new Layout3();
  constructor() { }

  setData(layout3Params: Layout3){
    this.layout3 = layout3Params;
  };

  ngOnInit() {
  }

}

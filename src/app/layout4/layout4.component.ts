import { Component, OnInit } from '@angular/core';
import { IComponentHost } from '../component-host.interface';
import { Layout4 } from '../models/layout_4';

@Component({
  selector: 'app-layout4',
  templateUrl: './layout4.component.html',
  styleUrls: ['./layout4.component.scss','../app.component.scss']
})
export class Layout4Component implements OnInit, IComponentHost {
  layout4: Layout4 = new Layout4();
  constructor() { }

  setData(layout4Params: Layout4){
    this.layout4 = layout4Params;
  };

  ngOnInit() {
  }

}

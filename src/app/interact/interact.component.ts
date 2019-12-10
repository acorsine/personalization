import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Layout1 } from '../models/layout_1';
import { Layout2 } from '../models/layout_2';
import { Layout3 } from '../models/layout_3';
import { Layout4 } from '../models/layout_4';
import { Layout5 } from '../models/layout_5';
import { Layout6 } from '../models/layout_6';
import { Layout7 } from '../models/layout_7';
import { Layout8 } from '../models/layout_8';

import { Layout1Component } from '../layout1/layout1.component';
import { Layout2Component } from '../layout2/layout2.component';
import { Layout3Component } from '../layout3/layout3.component';
import { Layout4Component } from '../layout4/layout4.component';
import { Layout5Component } from '../layout5/layout5.component';
import { Layout6Component } from '../layout6/layout6.component';
import { Layout7Component } from '../layout7/layout7.component';
import { Layout8Component } from '../layout8/layout8.component';

import { IComponentHost } from './component-host.interface';
import { ComponentHostDirective } from './component-host.directive';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.scss']
})
export class InteractComponent implements OnInit {

  layout1: Layout1 = new Layout1();
  layout2: Layout2 = new Layout2();
  layout3: Layout3 = new Layout3();
  layout4: Layout4 = new Layout4();
  layout5: Layout5 = new Layout5();
  layout6: Layout6 = new Layout6();
  layout7: Layout7 = new Layout7();
  layout8: Layout8 = new Layout8();
  layoutMapping = {
    layout_1: Layout1Component,
    layout_2: Layout2Component,
    layout_3: Layout3Component,
    layout_4: Layout4Component,
    layout_5: Layout5Component,
    layout_6: Layout6Component,
    layout_7: Layout7Component,
    layout_8: Layout8Component
  }

  @ViewChild(ComponentHostDirective, { static: true }) componentHost: ComponentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private http: HttpClient) {
  }

  ngOnInit(): void {
  
    var body = {
      "sessionId":"33446ad",
      "commands":[
        {
          "action":"startSession",
          "audienceID":[
            {
              "v":"3393837837", "t":"string", "n":"NR_PESS"
            }
          ],
          "audienceLevel":"Cliente",
          "ic":"MEI",
          "relyOnExistingSession":false,
          "parameters":[],
          "debug":false
          }
        ]
    };

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `http://localhost:4200/api/interact/servlet/RestServlet`;
    const res = this.http.post(url, body).subscribe((res) => {console.log(res)});
}

// (function(angular) {

  
}

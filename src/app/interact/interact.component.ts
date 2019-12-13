import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
import { ComponentHostDirectiveI } from './component-host.directive';
import { InteractService } from '../services/interact.service';
import { ActivatedRoute } from '@angular/router';


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

  @ViewChild(ComponentHostDirectiveI, { static: true }) componentHost: ComponentHostDirectiveI;

  constructor(private interactService: InteractService, private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      let segmento = params['sgs'];
      this.loadPage(segmento);
    })
  };
  private loadPage(segmento) {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    this.interactService.getInteractLayout(segmento)
      .subscribe((res: any) => {
        let start = 0;
        res.responses[1].offerLists.forEach((offerList) => {
          let offerLayout = res.responses[1].offerLists[start].offers[0].n
          console.log(offerLayout);
          if (offerLayout == 'Mei - Layout 1') {
            this.layout1.card1BotaoLink = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilinkbotaocard1').v;
            this.layout1.card1BotaoTexto = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meitextobotaocard1').v;
            this.layout1.card1Descricao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meidescricaocard1').v;
            this.layout1.card1Imagem = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiimagemcard1').v;
            this.layout1.card1Titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulocard1').v;
            this.layout1.card2BotaoLink = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilinkbotaocard2').v;
            this.layout1.card2BotaoTexto = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meitextobotaocard2').v;
            this.layout1.card2Descricao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meidescricaocard2').v;
            this.layout1.card2Imagem = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiimagemcard2').v;
            this.layout1.card2Titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulocard2').v;
            this.layout1.ilustracao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiilustracao').v;
            this.layout1.titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulo').v;
            this.layout1.subtitulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meisubtitulo').v;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes[5].v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout1);
          }
          if (offerLayout == 'Mei - Layout 2') {
            this.layout2.botaoTexto = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaotexto').v;
            this.layout2.ilustracao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiilustracao').v;
            this.layout2.botaoLink = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaolink').v;
            this.layout2.descricao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meidescricao').v;
            this.layout2.titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulo').v;
            this.layout2.subtitulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meisubtitulo').v;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout2').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout2)
          }
          if (offerLayout == 'Mei - Layout 3') {
            this.layout3.botaoTexto = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaotexto').v;
            this.layout3.ilustracao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiilustracao').v;
            this.layout3.botaoLink = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaolink').v;
            this.layout3.descricao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meidescricao').v;
            this.layout3.titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulo').v;
            this.layout3.subtitulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meisubtitulo').v;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout2').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout3)
          }
          if (offerLayout == 'Mei - Layout 4') {
            this.layout4.botaoTexto = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaotexto').v;
            this.layout4.ilustracao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meiilustracao').v;
            this.layout4.botaoLink = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meibotaolink').v;
            this.layout4.descricao = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meidescricao').v;
            this.layout4.titulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meititulo').v;
            this.layout4.subtitulo = res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meisubtitulo').v;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout2').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout4)
          }
          if (offerLayout == 'Mei - Layout 5') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout3').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (offerLayout == 'Mei - Layout 6') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout3').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (offerLayout == 'Mei - Layout 7') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout3').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (offerLayout == 'Mei - Layout 8') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[res.responses[1].offerLists[start].offers[0].attributes.find((attr) => attr.n == 'meilayout3').v]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          start += 1;
        });
      });
  };
};
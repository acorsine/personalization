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
import { ComponentHostDirective } from './component-host.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rich',
  templateUrl: './rich.component.html',
  styleUrls: ['./rich.component.scss']
})

export class RichComponent implements OnInit {

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private http: HttpClient, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      let segmento = params['sgs'];
      this.loadPage(segmento);
    })
  };

  private loadPage(segmento) {
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const url = `https://integration.richrelevance.com/rrserver/api/personalize?apiKey=56ab1488ab784010`;
    this.http.get(`${url}&apiClientKey=088b28bb18dee371&placements=generic_page.content_1|generic_page.content_2|generic_page.content_3|generic_page.content_4&sgs=${segmento}`)
      .subscribe((res: any) => {
        let start = 0;
        res.placements.forEach((placement) => {
          let placementLayout = res.placements[start].creatives[0].LAYOUT
          if (placementLayout == 'layout_1') {
            this.layout1.card1BotaoLink = res.placements[start].creatives[0].CARD_1_BOTAO_LINK;
            this.layout1.card1BotaoTexto = res.placements[start].creatives[0].CARD_1_BOTAO_TEXTO;
            this.layout1.card1Descricao = res.placements[start].creatives[0].CARD_1_DESCRICAO;
            this.layout1.card1Imagem = res.placements[start].creatives[0].CARD_1_IMG;
            this.layout1.card1Titulo = res.placements[start].creatives[0].CARD_1_TITULO;
            this.layout1.card2BotaoLink = res.placements[start].creatives[0].CARD_2_BOTAO_LINK;
            this.layout1.card2BotaoTexto = res.placements[start].creatives[0].CARD_2_BOTAO_TEXTO;
            this.layout1.card2Descricao = res.placements[start].creatives[0].CARD_2_DESCRICAO;
            this.layout1.card2Imagem = res.placements[start].creatives[0].CARD_2_IMG;
            this.layout1.card2Titulo = res.placements[start].creatives[0].CARD_2_TITULO;
            this.layout1.ilustracao = res.placements[start].creatives[0].ILUSTRACAO;
            this.layout1.titulo = res.placements[start].creatives[0].TITULO;
            this.layout1.subtitulo = res.placements[start].creatives[0].SUBTITULO;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout1);
          }
          if (placementLayout == 'layout_2') {
            this.layout2.botaoTexto = res.placements[start].creatives[0].BOTAO_TEXTO;
            this.layout2.ilustracao = res.placements[start].creatives[0].ILUSTRACAO;
            this.layout2.botaoLink = res.placements[start].creatives[0].BOTAO_LINK;
            this.layout2.descricao = res.placements[start].creatives[0].DESCRICAO;
            this.layout2.titulo = res.placements[start].creatives[0].TITULO;
            this.layout2.subtitulo = res.placements[start].creatives[0].SUBTITULO;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout2);
          }
          if (placementLayout == 'layout_3') {
            this.layout3.botaoTexto = res.placements[start].creatives[0].BOTAO_TEXTO;
            this.layout3.ilustracao = res.placements[start].creatives[0].ILUSTRACAO;
            this.layout3.botaoLink = res.placements[start].creatives[0].BOTAO_LINK;
            this.layout3.descricao = res.placements[start].creatives[0].DESCRICAO;
            this.layout3.titulo = res.placements[start].creatives[0].TITULO;
            this.layout3.subtitulo = res.placements[start].creatives[0].SUBTITULO;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout3);
          }
          if (placementLayout == 'layout_4') {
            this.layout4.botaoTexto = res.placements[start].creatives[0].BOTAO_TEXTO;
            this.layout4.ilustracao = res.placements[start].creatives[0].ILUSTRACAO;
            this.layout4.botaoLink = res.placements[start].creatives[0].BOTAO_LINK;
            this.layout4.descricao = res.placements[start].creatives[0].DESCRICAO;
            this.layout4.titulo = res.placements[start].creatives[0].TITULO;
            this.layout4.subtitulo = res.placements[start].creatives[0].SUBTITULO;
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance as IComponentHost).setData(this.layout4);
          }
          if (placementLayout == 'layout_5') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (placementLayout == 'layout_6') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (placementLayout == 'layout_7') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          if (placementLayout == 'layout_8') {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              this.layoutMapping[placement.creatives[0].LAYOUT]);
            const componentRef = viewContainerRef.createComponent(componentFactory);
          }
          start += 1;
        });
      });
  };
}

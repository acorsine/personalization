import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Layout1 } from './models/layout_1';
import { Layout2 } from './models/layout_2';
import { Layout3 } from './models/layout_3';
import { Layout4 } from './models/layout_4';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';

import { IComponentHost } from './component-host.interface';
import { ComponentHostDirective } from './component-host.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  layout1: Layout1 = new Layout1();
  layout2: Layout2 = new Layout2();
  layout3: Layout3 = new Layout3();
  layout4: Layout4 = new Layout4();
  layoutMapping = {
    layout_1: Layout1Component,
    layout_2: Layout2Component,
    layout_3: Layout3Component,
    layout_4: Layout4Component
  }
  @ViewChild(ComponentHostDirective, { static: true }) componentHost: ComponentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPage('');
  }

  loadAgain(sgs) {
    this.loadPage(sgs);
  }

  title = 'mei-rr2';

  private loadPage(sgs) {
    const viewContainerRef = this.componentHost.viewContainerRef;
    const url = `https://integration.richrelevance.com/rrserver/api/personalize?apiKey=56ab1488ab784010`;
    this.http.get(`${url}&apiClientKey=088b28bb18dee371&placements=generic_page.content_1|generic_page.content_2|generic_page.content_3|generic_page.content_4&sgs=${sgs}`)
      .subscribe((res: any) => {
        let start = 0;
        res.placements.forEach((placement) => {
          let placementLayout = res.placements[start].creatives[0].LAYOUT
          console.log(start, placementLayout);
          if( placementLayout == 'layout_1') {
            console.log('layout_1, varrido e associado');
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
          if( placementLayout == 'layout_2') {
            console.log('layout_2, varrido e associado');
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
          if( placementLayout == 'layout_3') {
            console.log('layout_3, varrido e associado');
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
          if( placementLayout == 'layout_4') {
            console.log('layout_4, varrido e associado');
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
          start += 1;
        });
      });
  }
}

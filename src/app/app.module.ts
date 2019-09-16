import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentHostDirective } from './component-host.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Layout5Component } from './layout5/layout5.component';
import { Layout6Component } from './layout6/layout6.component';


@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    ComponentHostDirective,
    HeaderComponent,
    FooterComponent,
    Layout5Component,
    Layout6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [Layout1Component, Layout2Component, Layout3Component, Layout4Component],
  bootstrap: [AppComponent],

})
export class AppModule { }

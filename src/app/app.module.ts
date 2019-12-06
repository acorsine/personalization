import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout4Component } from './layout4/layout4.component';
import { Layout5Component } from './layout5/layout5.component';
import { Layout6Component } from './layout6/layout6.component';
import { Layout7Component } from './layout7/layout7.component';
import { Layout8Component } from './layout8/layout8.component';

import { SegmentosComponent } from './segmentos/segmentos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

import { RichComponent } from './rich/rich.component';
import { ComponentHostDirective } from './rich/component-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHostDirective,
    HeaderComponent,
    FooterComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component,
    Layout6Component,
    Layout8Component,
    Layout7Component,
    Layout8Component,
    SegmentosComponent,
    ProfileEditorComponent,
    RichComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [RichComponent],
  entryComponents: [Layout1Component, Layout2Component, Layout3Component, Layout4Component, Layout5Component,
    Layout6Component, Layout7Component, Layout8Component],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

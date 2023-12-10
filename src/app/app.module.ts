import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelyszinekComponent } from './helyszinek/helyszinek.component';
import { EsemenyekComponent } from './esemenyek/esemenyek.component';
import { InformaciokComponent } from './informaciok/informaciok.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FelszerelesekComponent } from './felszerelesek/felszerelesek.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HelyszinekComponent,
    EsemenyekComponent,
    InformaciokComponent,
    KapcsolatComponent,
    FelszerelesekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeasurementsCardComponent } from './measurements-card/measurements-card.component';

import { NetworkService } from './network.service';


@NgModule({
  declarations: [
    AppComponent,
    MeasurementsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleChartsModule
  ],
  providers: [
    NetworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

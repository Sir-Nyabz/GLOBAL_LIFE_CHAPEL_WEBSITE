import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image-angular-universal';

import { routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { Feed1000Component } from './feed1000/feed1000.component';

@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, NavbarComponent, ScheduleComponent, Feed1000Component
  ],

  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

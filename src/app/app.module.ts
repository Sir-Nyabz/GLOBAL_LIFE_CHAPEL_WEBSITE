import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveComponent } from './give/give.component';
import { HomeComponent } from './home/home.component';
import { OurGeneralOverseerComponent } from './about/our-general-overseer/our-general-overseer.component';
import { GlcComponent } from './about/glc/glc.component';
import { MorningDevotionComponent } from './morning-devotion/morning-devotion.component';
import { ChristForAllComponent } from './christ-for-all/christ-for-all.component';
import { MinistriesOrDepartmentsComponent } from './ministries-or-departments/ministries-or-departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    GiveComponent,
    HomeComponent,
    OurGeneralOverseerComponent,
    GlcComponent,
    MorningDevotionComponent,
    ChristForAllComponent,
    MinistriesOrDepartmentsComponent,
    GalleryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

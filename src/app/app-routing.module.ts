import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurGeneralOverseerComponent } from './about/our-general-overseer/our-general-overseer.component';
import { GlcComponent } from './about/glc/glc.component';
import { MorningDevotionComponent } from './morning-devotion/morning-devotion.component';
import { ChristForAllComponent } from './christ-for-all/christ-for-all.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HomeComponent,
  GlcComponent,
  OurGeneralOverseerComponent,
  MorningDevotionComponent,
  ChristForAllComponent,
  GalleryComponent
]
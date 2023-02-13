import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveComponent } from './give/give.component';
import { HomeComponent } from './home/home.component';
import { OurGeneralOverseerComponent } from './about/our-general-overseer/our-general-overseer.component';
import { GlcComponent } from './about/glc/glc.component';
import { MorningDevotionComponent } from './morning-devotion/morning-devotion.component';
import { ChristForAllComponent } from './christ-for-all/christ-for-all.component';
import { MinistriesOrDepartmentsComponent } from './ministries-or-departments/ministries-or-departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path: "glc", component: GlcComponent},
  {path: "ourgeneraloverseer", component: OurGeneralOverseerComponent },
  {path: "morningdevotion", component: MorningDevotionComponent},
  {path:"christforall", component: ChristForAllComponent},
  {path: "give", component: GiveComponent},
  {path: "ministriesordepartments", component: MinistriesOrDepartmentsComponent },
  {path: "gallery", component: GalleryComponent },
  {path: "contactus", component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HomeComponent,
  GlcComponent,
  OurGeneralOverseerComponent,
  MorningDevotionComponent,
  ChristForAllComponent,
  GiveComponent,
  MinistriesOrDepartmentsComponent,
  GalleryComponent,
  ContactUsComponent
]

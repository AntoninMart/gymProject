import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SeancePageComponent } from './pages/seance-page/seance-page.component';
import { UnknowpageComponent } from './pages/unknowpage/unknowpage.component';
import { CreateSeanceComponent } from './components/create-seance/create-seance.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { AddExerciceComponent } from './components/add-exercice/add-exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomePageComponent,
    SeancePageComponent,
    UnknowpageComponent,
    CreateSeanceComponent,
    BoutiquePageComponent,
    AddExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

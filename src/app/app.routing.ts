import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SeancePageComponent } from './pages/seance-page/seance-page.component';
import { UnknowpageComponent } from './pages/unknowpage/unknowpage.component';
import { ExercicesPageComponent } from './components/exercices-page/exercices-page.component';
import { GroupeSelectorComponent } from './components/groupe-selector/groupe-selector.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "seance", component: SeancePageComponent },
  { path: "groupeselector", component: GroupeSelectorComponent },
  { path: "exercice/:id", component: ExercicesPageComponent },
  { path: "**", component: UnknowpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

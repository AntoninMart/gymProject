import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './accueil/components/pages/home-page/home-page.component';
import { SeancePageComponent } from './seances/pages/seance-page/seance-page.component';
import { UnknowpageComponent } from './shared/unknowpage/unknowpage.component';
import { ExercicesPageComponent } from './exercices/pages/exercices-page/exercices-page.component';
import { GroupeSelectorComponent } from './exercices/pages/groupe-selector/groupe-selector.component';
import { ListSeancePageComponent } from './seances/pages/list-seance-page/list-seance-page.component';
import { UpdateSeancePageComponent } from './seances/pages/update-seance-page/update-seance-page.component';

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "seance", component: SeancePageComponent },
  { path: "groupeselector", component: GroupeSelectorComponent },
  { path: "exercice/:id", component: ExercicesPageComponent },
  { path: "list-seance", component: ListSeancePageComponent},
  { path: "update-seance/:id", component: UpdateSeancePageComponent},
  { path: "**", component: UnknowpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

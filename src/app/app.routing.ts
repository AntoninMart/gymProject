import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SeancePageComponent } from './pages/seance-page/seance-page.component';
import { UnknowpageComponent } from './pages/unknowpage/unknowpage.component';
import { AddExerciceComponent } from './components/add-exercice/add-exercice.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "seance", component: SeancePageComponent },
  { path: "addexercice", component: AddExerciceComponent },
  { path: "**", component: UnknowpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

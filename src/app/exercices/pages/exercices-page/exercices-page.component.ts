import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/core/services/api-gym.service';

@Component({
  selector: 'app-exercices-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './exercices-page.component.html',
  styleUrl: './exercices-page.component.scss'
})
export class ExercicesPageComponent {
  
  exercices: any = [];
  groupe: any = [];
  private idGroupe!:number;
  public groupeName!:string;

  constructor (private apiGymService: ApiGymService) {}

  @Input()
  set id(Id: string) {
    this.idGroupe = +Id;
  }
  
  ngOnInit() {
    this.apiGymService.GetExercicesByGroupe(this.idGroupe).subscribe((data: any[]) => {
      this.exercices = data;
    });
    this.apiGymService.GetGroupeById(this.idGroupe).subscribe((data: any[]) => {
      this.groupe = data;
      this.groupeName = this.groupe.nom;
    });
  }
}

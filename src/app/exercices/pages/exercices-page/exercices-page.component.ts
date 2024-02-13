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
  private idGroupe!: number;

  constructor(private apiGymService: ApiGymService) { }

  @Input()
  set id(Id: string) {
    this.idGroupe = Number(Id);
    console.log(this.idGroupe)
  }

  ngOnInit() {
    console.log("on requete les exercices by groupe :")
    this.apiGymService.GetExercicesByGroupe(this.idGroupe).subscribe((
      data: 
      { 
        description: string, 
        groupeMusculaire: {
          id: number,
          nom: string,
        },
        groupeMusculaireId: number,
        id: number,
        image: string,
        nom: string,
      }[]
      ) => {
      this.exercices = data;
    });
  }
}

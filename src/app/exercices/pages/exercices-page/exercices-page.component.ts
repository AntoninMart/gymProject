import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/core/services/api-gym.service';
import { IExercices } from 'src/app/core/interface/exercices.interface';

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
    this.apiGymService.GetExercicesByGroupe(this.idGroupe).subscribe((data: IExercices[]) => {
      this.exercices = data;
    });
  }
}

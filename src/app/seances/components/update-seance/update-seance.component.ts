import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/core/services/api-gym.service';

@Component({
  selector: 'app-update-seance',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './update-seance.component.html',
  styleUrl: './update-seance.component.scss'
})
export class UpdateSeanceComponent {
  @Input() idSeance!: number;
  public Seance: any = [];
  public Exercices: any = [];
  public groupName!: string;
  public exercicesList!: [{ nom: string, image: string, groupeMusculaire: string }];

  constructor(private apiGymService: ApiGymService) { }

  ngOnInit() {
    this.apiGymService.GetExercicesBySeanceId(this.idSeance).subscribe((data: any[]) => {
      console.log(data);
      this.Seance = data;
      this.loadExercice();
    });
  }

  loadExercice() {
    this.Seance.forEach((element: { id: number, id_Seances: number, nbSerie: number; }) => {
      this.apiGymService.GetExercicesById(element.id).subscribe((data: any[]) => {
        this.Exercices.push(data);
        this.loadExerciceList();
      });
    });
    // console.log(this.Exercices);
  }

  loadExerciceList() {
    console.log("test test test test")
    this.Exercices.forEach((element: { description: string, id: number, id_GroupeMusculaire: number, image: string, nom: string }) => {
      this.apiGymService.GetGroupeById(element.id_GroupeMusculaire).subscribe((data: {id: number, nom: string;}) => {
        // this.exercicesList.push({nom: element.nom, image:element.image, groupeMusculaire:data.nom});
        console.log(data);
      });
    });
  }


}

import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUpdateExercices } from 'src/app/core/interface/updateExercices.interface';
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
  public exercices!: any[];

  constructor(private apiGymService: ApiGymService) { }

  @Input()
  set id(Id: string) { this.idSeance = Number(Id); }

  ngOnInit() {
    this.apiGymService.GetExercicesBySeanceId(this.idSeance).subscribe((data: IUpdateExercices) => {
      this.exercices = data.exercices;
    });
  }


}

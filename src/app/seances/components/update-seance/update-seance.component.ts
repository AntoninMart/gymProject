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
  public Seance:any = [];
  public Exercices:any = [];
  
  constructor(private apiGymService: ApiGymService) { }

  ngOnInit() {
    this.apiGymService.GetExercicesBySeanceId(this.idSeance).subscribe((data: any[]) => {
      console.log(data);
    });
    // this.Seance.forEach(element => {
    //   this.apiGymService.GetExercicesById(element.id).subscribe((data: any[]) => {
    //     this.Exercices.push(element);
    //   });
    // });
  }
  
}

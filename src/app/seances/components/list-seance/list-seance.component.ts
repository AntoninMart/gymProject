import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/core/services/api-gym.service';

@Component({
  selector: 'app-list-seance',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list-seance.component.html',
  styleUrl: './list-seance.component.scss'
})
export class ListSeanceComponent {
  constructor(private apiGymService: ApiGymService){ }

  public Seance : any = [];

  ngOnInit() {
    this.apiGymService.getSeance().subscribe((data: any[]) => {
      this.Seance = data;
    });
  }

  deleteSeance(id: number) {
    this.apiGymService.deleteSeance(id).subscribe((data: any[]) => {
      this.Seance = data;
    });
    window.location.reload()
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiGymService } from 'src/app/core/services/api-gym.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class HomeComponent {
  constructor(private apiGymService: ApiGymService){ }

  public Seance : any = [];

  // public Seance : any = [
  //   {
  //     image : "assets/images/one.png",
  //     titre : "Séance une",
  //   },
  //   {
  //     image : "assets/images/two.png",
  //     titre : "Séance deux",
  //   }
  // ]

  ngOnInit() {
    this.apiGymService.getSeance().subscribe((data: any[]) => {
      this.Seance = data;
      console.log(data)
    });
  }
}

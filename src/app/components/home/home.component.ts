import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class HomeComponent {
  constructor(){ }
  public Seance : any = [
    {
      image : "assets/images/one.png",
      titre : "Séance une",
    },
    {
      image : "assets/images/two.png",
      titre : "Séance deux",
    }
  ]
}

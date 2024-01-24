import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ApiGymService } from 'src/app/services/api-gym.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-add-exercice',
    templateUrl: './add-exercice.component.html',
    styleUrls: ['./add-exercice.component.scss'],
    standalone: true,
    imports: [HeaderComponent, NgFor]
})
export class AddExerciceComponent {
  groupe: any = [];
  constructor (private apiGymService: ApiGymService) {}

  ngOnInit() {
    this.apiGymService.getGroupe().subscribe((data: any[]) => {
      this.groupe = data;
      console.log(this.groupe);
    });
  }

}

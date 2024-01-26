import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/services/api-gym.service';

@Component({
  selector: 'app-groupe-selector',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './groupe-selector.component.html',
  styleUrl: './groupe-selector.component.scss'
})
export class GroupeSelectorComponent {
  groupe: any = [];
  constructor (private apiGymService: ApiGymService) {}

  ngOnInit() {
    this.apiGymService.getGroupe().subscribe((data: any[]) => {
      this.groupe = data;
    });
  }
}

import { Component, Input } from '@angular/core';
import { UpdateSeanceComponent } from '../../components/update-seance/update-seance.component';

@Component({
  selector: 'app-update-seance-page',
  standalone: true,
  imports: [UpdateSeanceComponent],
  templateUrl: './update-seance-page.component.html',
  styleUrl: './update-seance-page.component.scss'
})
export class UpdateSeancePageComponent {
  public idSeance!:number;
  constructor() { }
  @Input()
  set id(Id: string) {
    this.idSeance = +Id;
  }
} 

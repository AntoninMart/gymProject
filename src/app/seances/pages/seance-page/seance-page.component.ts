import { Component } from '@angular/core';
import { CreateSeanceComponent } from '../../components/create-seance/create-seance.component';
import { HeaderComponent } from '../../../core/header/header.component';

@Component({
    selector: 'app-seance-page',
    templateUrl: './seance-page.component.html',
    styleUrls: ['./seance-page.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CreateSeanceComponent]
})
export class SeancePageComponent {

}

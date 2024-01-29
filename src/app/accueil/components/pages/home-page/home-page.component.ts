import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../core/header/header.component';
import { RouterLink } from '@angular/router';
import { ListSeanceComponent } from 'src/app/seances/components/list-seance/list-seance.component';
import { AccueilContentComponent } from '../../accueil-content/accueil-content.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [HeaderComponent, RouterLink, ListSeanceComponent, AccueilContentComponent]
})
export class HomePageComponent {

}

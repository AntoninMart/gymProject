import { Component } from '@angular/core';
import { HomeComponent } from '../../../../seances/pages/home/home.component';
import { HeaderComponent } from '../../../../core/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HomeComponent, RouterLink]
})
export class HomePageComponent {

}

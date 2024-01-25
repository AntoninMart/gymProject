import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
    selector: 'app-boutique-page',
    templateUrl: './boutique-page.component.html',
    styleUrls: ['./boutique-page.component.scss'],
    standalone: true,
    imports: [HeaderComponent]
})
export class BoutiquePageComponent {

}

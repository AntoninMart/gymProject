import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiGymService } from 'src/app/core/services/api-gym.service';

@Component({
    selector: 'app-create-seance',
    templateUrl: './create-seance.component.html',
    styleUrls: ['./create-seance.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink, FormsModule, NgIf, NgClass]
})
export class CreateSeanceComponent {
    public name!: string;
    public isTextareaFilled: boolean = false;

    constructor(private apiGymService: ApiGymService) { }

    public createSeance(): void {
        console.log(this.name);
        const data = { nom: this.name, id_Utilisateurs: 1 };
        this.apiGymService.addSeance(data).subscribe((data: any) => {
            console.log(data)
          });;
    }

    public onTextareaChange(): void {
        this.isTextareaFilled = this.name.trim() !== '';
    }

}

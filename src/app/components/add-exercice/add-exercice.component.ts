import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-add-exercice',
    templateUrl: './add-exercice.component.html',
    styleUrls: ['./add-exercice.component.scss'],
    standalone: true,
    imports: [HeaderComponent, NgFor]
})
export class AddExerciceComponent {
  public exercices : any = [
    {
      titre: "Développé couché haltère incliné",
      image: "assets/images/exercices/dc_h_i.webp",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium et quos iste magni fugiat ex doloremque, molestias hic libero! Dolore aliquam in laborum nihil veniam illum quos cumque hic impedit.",
    },
    {
      titre: "Développé couché incliné",
      image: "assets/images/exercices/dc_i.webp",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium et quos iste magni fugiat ex doloremque, molestias hic libero! Dolore aliquam in laborum nihil veniam illum quos cumque hic impedit.",
    },
    {
      titre: "Développé couché",
      image: "assets/images/exercices/dc.webp",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium et quos iste magni fugiat ex doloremque, molestias hic libero! Dolore aliquam in laborum nihil veniam illum quos cumque hic impedit.",
    },
    {
      titre: "Pecs fly",
      image: "assets/images/exercices/fly.webp",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium et quos iste magni fugiat ex doloremque, molestias hic libero! Dolore aliquam in laborum nihil veniam illum quos cumque hic impedit.",
    },
    {
      titre: "Pecs poulie haute",
      image: "assets/images/exercices/poulie_d.webp",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium et quos iste magni fugiat ex doloremque, molestias hic libero! Dolore aliquam in laborum nihil veniam illum quos cumque hic impedit.",
    },
  ]
}

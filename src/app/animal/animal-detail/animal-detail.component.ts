import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;

  ngOnInit(): void {
    this.animal = {
      name: 'Milou',
      species: 'dog',
    };
  }
}

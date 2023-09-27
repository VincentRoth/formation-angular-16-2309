import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.animal = {
      name: undefined,
      species: undefined,
    };
  }

  onSubmit(): void {
    this.animalService.create(this.animal).subscribe(() => {
      this.router.navigate(['/animals']);
    });
  }
}

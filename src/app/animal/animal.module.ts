import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalDetailComponent, AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalDetailComponent, AnimalListComponent],
})
export class AnimalModule {}

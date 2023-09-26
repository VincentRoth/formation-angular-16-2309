import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input({
    required: true,
  })
  model: Animal;
  @Output() deletion = new EventEmitter<Animal>();

  onDelete(): void {
    this.deletion.emit(this.model);
  }
}

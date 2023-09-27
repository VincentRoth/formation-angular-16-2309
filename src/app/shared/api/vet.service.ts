import { Injectable } from '@angular/core';
import { Vet } from './vet';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class VetService extends AbstractCrudService<Vet> {
  constructor() {
    super('/api/veterinarians');
  }
}

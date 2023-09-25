import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      name: 'Milou',
      species: 'dog',
      phoneNumber: '01.23.45.67.89',
      email: 'email@google.com',
    };
  }

  getAll(): Animal[] {
    return [
      {
        name: 'Milou',
        species: 'dog',
        phoneNumber: '01.23.45.67.89',
        email: 'email@google.com',
      },
      {
        name: 'Idéfix',
        species: 'dog',
        phoneNumber: '01.23.45.67.89',
        email: 'email@google.com',
      },
    ];
  }
}

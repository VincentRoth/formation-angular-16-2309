import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalItemComponent } from './animal-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalItemComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = {
      name: 'Name',
      species: 'Species',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

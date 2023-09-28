import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponent } from './animal-detail.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Animal } from '../../shared/api/animal';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(paramMap),
            snapshot: {
              paramMap, // paramMap: paramMap
            },
          },
        },
      ],
    });

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request correct animal for a given ID', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/1');
    const animal: Animal = {
      id: 1,
      name: 'Name',
      species: 'Species',
    };
    requestCtrl.flush(animal);

    expect(component.animal?.id).toBe(1);
  });
});

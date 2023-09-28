import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponent } from './animal-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

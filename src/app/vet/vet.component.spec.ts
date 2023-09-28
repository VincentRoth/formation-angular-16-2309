import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetComponent } from './vet.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VetComponent', () => {
  let component: VetComponent;
  let fixture: ComponentFixture<VetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(VetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

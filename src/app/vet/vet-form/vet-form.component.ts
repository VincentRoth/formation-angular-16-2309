import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VetFormGroupType } from './vet-form-group.type';
import { VetService } from '../../shared/api/vet.service';
import { Router } from '@angular/router';
import { Vet } from '../../shared/api/vet';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup<VetFormGroupType>;

  constructor(private vetService: VetService, private router: Router) {}

  ngOnInit(): void {
    this.vetFormGroup = new FormGroup({
      firstName: new FormControl<string>(''),
      lastName: new FormControl<string>(''),
    });
  }

  onSubmit(): void {
    const value: Vet = this.vetFormGroup.getRawValue();

    this.vetService.save(value).subscribe(() => {
      this.router.navigate(['/vets']);
    });
  }
}

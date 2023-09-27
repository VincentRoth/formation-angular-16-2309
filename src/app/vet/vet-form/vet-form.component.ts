import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VetFormGroupType } from './vet-form-group.type';
import { VetService } from '../../shared/api/vet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vet } from '../../shared/api/vet';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetFormGroup: FormGroup<VetFormGroupType>;
  private id?: number;

  constructor(
    private vetService: VetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((data) => {
        this.id = data.id;
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    const value: Vet = this.vetFormGroup.getRawValue();
    value.id = this.id;
    this.vetService.save(value).subscribe(() => {
      this.router.navigate(['/vets']);
    });
  }

  private initForm(model?: Vet): void {
    this.vetFormGroup = new FormGroup({
      firstName: new FormControl<string>(model?.firstName || ''),
      lastName: new FormControl<string>(model?.lastName || ''),
    });
  }
}

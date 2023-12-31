import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right';
import { VetFormComponent } from './vet-form/vet-form.component';

const routes: Routes = [
  {
    path: '',
    component: VetComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: 'new', component: VetFormComponent },
      { path: 'edit/:id', component: VetFormComponent },
      {
        path: ':id',
        component: VetDetailComponent,
        canActivate: [hasRightGuard],
        data: {
          right: Right.VET_GET,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}

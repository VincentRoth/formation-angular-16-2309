import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { Vet } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnInit, OnDestroy {
  vet?: Vet;
  private subscription: Subscription;

  constructor(
    private vetService: VetService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activedRoute.paramMap
      .pipe(
        switchMap((paramMap) => this.vetService.get(Number(paramMap.get('id'))))
      )
      .subscribe((data) => {
        this.vet = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

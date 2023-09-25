import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { MailToDirective } from '../../shared/mail-to.directive';
import { PhonePipe } from '../../shared/phone.pipe';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
  standalone: true,
  imports: [MailToDirective, PhonePipe],
})
export class AnimalDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animal = this.animalService.get();
  }
}

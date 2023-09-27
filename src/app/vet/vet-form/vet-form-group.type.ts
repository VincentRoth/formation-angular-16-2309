import { FormControl } from '@angular/forms';

export interface VetFormGroupType {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

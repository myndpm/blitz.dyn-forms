import { Component, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { simpleForm } from './simple.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  ngVersion = 'Angular ' + VERSION.full;

  // dyn-form inputs
  config = simpleForm;
  form = new FormGroup({});
  mode = 'edit';

  loadData(): void {
  }

  toggleMode(): void {
    this.mode = (this.mode === 'edit') ? 'display' : 'edit';

    if (this.mode === 'display') {
      // reset invalid styles on display markAllAsPristine
      this.markAsUntouched(this.form);
    }
  }

  private markAsUntouched(group: FormGroup | FormArray): void {
    group.markAsUntouched();

    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        control.markAsUntouched();
      } else if (control instanceof FormGroup) {
        this.markAsUntouched(control);
      }
    });
  }
}

import { Component, VERSION, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DynFormComponent } from '@myndpm/dyn-forms';
import { simpleData, simpleForm } from './simple.form';

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

  @ViewChild(DynFormComponent, { static: true })
  dynForm!: DynFormComponent;

  loadData(): void {
    // we can load data AfterViewInit
    this.dynForm.patchValue(simpleData);
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

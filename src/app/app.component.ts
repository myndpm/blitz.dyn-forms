import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  }
}

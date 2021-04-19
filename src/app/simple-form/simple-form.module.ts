import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { DynFormsMaterialModule } from '@myndpm/dyn-forms/ui-material';
import { LayoutModule } from '../layout/layout.module';
import { SimpleComponent } from './simple.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'simple-form',
  },
  {
    path: 'simple-form',
    component: SimpleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DynFormsMaterialModule, // STACKBLITZ ONLY
    DynFormsMaterialModule.forFeature(),
    MatButtonModule,
    LayoutModule,
  ],
  declarations: [
    SimpleComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        hideRequiredMarker: true,
        floatLabel: 'auto', // also set in INPUT.params.floatLabel
      },
    },
  ],
})
export class SimpleFormModule {}

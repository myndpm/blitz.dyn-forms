import { Component, ChangeDetectionStrategy, VERSION, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  ngVersion = 'Angular ' + VERSION.full;

  @Input() heading?: string;
}

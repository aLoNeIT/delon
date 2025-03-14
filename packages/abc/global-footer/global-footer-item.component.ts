import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

import { BooleanInput, InputBoolean } from '@delon/util/decorator';

@Component({
  selector: 'global-footer-item',
  exportAs: 'globalFooterItem',
  template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GlobalFooterItemComponent {
  static ngAcceptInputType_blankTarget: BooleanInput;

  @ViewChild('host', { static: true }) host!: TemplateRef<void>;

  @Input() href?: string;
  @Input() @InputBoolean() blankTarget?: boolean;
}

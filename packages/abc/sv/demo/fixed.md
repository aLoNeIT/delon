---
order: 2
title:
  zh-CN: 固定标签宽度
  en-US: Fixed Label Width
---

## zh-CN

固定标签宽度让布局看起来更加整洁。

## en-US

Use `labelWidth` to make the layout look cleaner

```ts
import { Component } from '@angular/core';

import { STColumn } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sv-container labelWidth="150">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Reject" type="danger" col="1"> OMG <a class="ml-sm" (click)="msg.success('to')">Fixed</a> </sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50"></sv>
      <sv [label]="label">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        Custom label
      </sv>
      <sv hideLabel col="1">
        <st [columns]="columns" size="small"></st>
      </sv>
    </sv-container>
  `
})
export class DemoComponent {
  columns: STColumn[] = [{ title: 'id' }];

  constructor(public msg: NzMessageService) {}
}
```

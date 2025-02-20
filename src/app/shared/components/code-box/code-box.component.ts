/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, filter, takeUntil } from 'rxjs';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { deepCopy } from '@delon/util/other';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AppService, CodeService, I18NService } from '@core';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  host: {
    '[class.code-box]': 'true',
    '[class.expand]': 'expand'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBoxComponent implements OnInit, OnDestroy {
  private _item: any;
  private _orgItem: any;
  private destroy$ = new Subject<void>();
  copied = false;
  theme = 'default';

  @Input()
  set item(value: any) {
    if (!this._orgItem) {
      this._orgItem = deepCopy(value);
    }
    const ret: any = {
      meta: value.meta,
      code: value.code.trim(),
      title: this.i18n.get(value.meta.title),
      summary: this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(value.summary)),
      browser: +value.meta.browser > 0 ? +value.meta.browser : null,
      bg: value.meta.bg,
      urls: value.urls
    };
    this._item = ret;
  }
  get item(): any {
    return this._item;
  }
  @Input() type: 'default' | 'simple' = 'default';
  @Input() expand: boolean = false;

  constructor(
    private appService: AppService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private msg: NzMessageService,
    private codeSrv: CodeService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.appService.theme$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.theme = data;
      this.check();
    });
    this.i18n.change
      .pipe(
        filter(() => !!this._orgItem),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.item.title = this.i18n.get(this._orgItem.meta.title);
        this.item.summary = this.i18n.get(this._orgItem.summary);
        this.check();
      });
  }

  check(): void {
    this.cdr.markForCheck();
  }

  handle(): void {
    this.expand = !this.expand;
    this.check();
  }

  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz', includeCli: boolean = false): void {
    if (ide === 'StackBlitz') {
      this.codeSrv.openOnStackBlitz(this.item.title, this.item.code);
    } else {
      // this.msg.warning(`CodeSandbox does not support Angular 13, pls use StackBlitz!`);
      this.codeSrv.openOnCodeSandbox(this.item.title, this.item.code, includeCli);
    }
  }

  onCopy(value: string): void {
    copy(value).then(() => {
      this.msg.success(this.i18n.fanyi('app.demo.copied'));
      this.copied = true;
      this.check();
      setTimeout(() => {
        this.copied = false;
        this.check();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

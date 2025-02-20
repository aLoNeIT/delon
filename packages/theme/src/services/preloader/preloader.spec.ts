import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { preloaderFinished } from './preloader';

describe('theme: preloader', () => {
  let cached: NzSafeAny = {};

  beforeEach(() => {
    cached = {};
  });

  it('should be remove preloader', (done: () => void) => {
    spyOn(document, 'querySelector').and.callFake((type: string) => {
      if (cached[type]) return cached[type];
      cached[type] = {
        className: [],
        style: {
          overflow: ''
        },
        addEventListener: (_key: string, fn: NzSafeAny) => {
          fn();
        }
      };
      return cached[type];
    });
    const body = document.querySelector('body')!;
    const preloader = document.querySelector('.preloader')!;
    preloaderFinished();
    expect(body.style.overflow).toBe('hidden');

    (window as NzSafeAny).appBootstrap();
    setTimeout(() => {
      expect(body.style.overflow).toBe('');
      expect(preloader.className).toContain('preloader-hidden');
      done();
    }, 200);
  });

  it('preloader value null when running --hmr', (done: () => void) => {
    spyOn(document, 'querySelector').and.callFake((type: string) => {
      if (type === '.preloader') return null;
      if (cached[type]) return cached[type];
      cached[type] = {
        className: [],
        style: {
          overflow: ''
        },
        addEventListener: (_key: string, fn: NzSafeAny) => {
          fn();
        }
      };
      return cached[type];
    });

    preloaderFinished();
    (window as NzSafeAny).appBootstrap();
    setTimeout(() => {
      expect(document.querySelector('.preloader')).toBeNull();
      done();
    }, 200);
  });
});

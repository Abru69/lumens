import { Injectable, signal } from '@angular/core';

/**
 * ScrollService exposes a reactive signal with the current scroll position.
 * Components can inject this to react to scroll changes without directly
 * touching the DOM.
 */
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  readonly scrollY = signal<number>(0);

  updateScrollY(value: number): void {
    this.scrollY.set(value);
  }

  get isScrolled(): boolean {
    return this.scrollY() > 20;
  }
}

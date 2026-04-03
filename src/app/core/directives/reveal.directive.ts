import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

/**
 * RevealDirective applies an IntersectionObserver to an element,
 * adding the 'is-visible' class when the element enters the viewport.
 *
 * Usage: <div appReveal [revealDelay]="100">...</div>
 *
 * This avoids direct DOM manipulation from components, following Angular best practices.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay: number = 0;

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;

    // Set initial hidden state via Renderer2 (no direct DOM style manipulation)
    this.renderer.setStyle(nativeEl, 'opacity', '0');
    this.renderer.setStyle(nativeEl, 'transform', 'translateY(30px)');
    this.renderer.setStyle(
      nativeEl,
      'transition',
      `opacity 0.8s cubic-bezier(0.5, 0, 0, 1) ${this.revealDelay}ms, transform 0.8s cubic-bezier(0.5, 0, 0, 1) ${this.revealDelay}ms`
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(nativeEl, 'opacity', '1');
            this.renderer.setStyle(nativeEl, 'transform', 'translateY(0)');
            // Unobserve after animation to save resources
            this.observer.unobserve(nativeEl);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

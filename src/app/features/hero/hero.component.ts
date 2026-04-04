import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('heroEntrance', [
      transition(':enter', [
        query('.hero-item', [
          style({ opacity: 0, transform: 'translateY(24px)' }),
          stagger(120, [
            animate(
              '700ms cubic-bezier(0.4, 0, 0.2, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('imageFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px) scale(0.97)' }),
        animate(
          '900ms 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
    ]),
  ],
  template: `
    <section
      class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <!-- Background elements -->
      <div class="bg-grid" aria-hidden="true"></div>
      <div class="hero-glow" aria-hidden="true"></div>

      <!-- Content -->
      <div
        @heroEntrance
        class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center"
      >
        <!-- Badge -->
        <div class="hero-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-sakura/50 bg-brand-sakura/20 text-slate-700 text-sm font-medium mb-8">
          <span class="relative flex h-2 w-2" aria-hidden="true">
            <span class="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-brand-sakura_dark opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-sakura_dark"></span>
          </span>
          <span>Tecnología clara. Soluciones reales.</span>
        </div>

        <!-- Heading -->
        <h1
          id="hero-heading"
          class="hero-item text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto"
        >
          Escala tu negocio con <br />
          <span class="text-gradient">software de alto nivel</span>
        </h1>

        <!-- Description -->
        <p class="hero-item text-lg lg:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
          Diseñamos y desarrollamos sistemas a medida, plataformas web profesionales
          y soluciones tecnológicas que impulsan el crecimiento de empresas exigentes.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            class="btn-primary w-full sm:w-auto text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2"
          >
            Agenda una consultoría
            <i class="ph ph-arrow-right font-bold" aria-hidden="true"></i>
          </a>
          <a
            href="#servicios"
            class="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
          >
            Ver nuestros servicios
          </a>
        </div>

        <!-- Hero Image -->
        <div @imageFadeIn class="mt-20 relative mx-auto max-w-5xl">
          <div class="rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-2xl shadow-brand-sakura/20 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=600"
              alt="Vista previa del dashboard de AltusDev mostrando una interfaz moderna de desarrollo"
              class="rounded-xl opacity-90 border border-slate-100"
              width="1200"
              height="600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent implements OnInit {
  readonly visible = signal(false);

  ngOnInit(): void {
    // Trigger animation on init
    setTimeout(() => this.visible.set(true), 50);
  }
}

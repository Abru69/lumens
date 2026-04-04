import { Component, ChangeDetectionStrategy } from '@angular/core';
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
import { ProcessStep } from '../../shared/models/models';

@Component({
  selector: 'app-proceso',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('stepsIn', [
      transition(':enter', [
        query('.step-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate(
              '600ms cubic-bezier(0.4, 0, 0.2, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
  template: `
    <section
      id="proceso"
      class="py-24 bg-slate-50 border-y border-slate-200"
      aria-labelledby="proceso-heading"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div appReveal class="text-center mb-16">
          <h2 id="proceso-heading" class="text-3xl font-bold mb-4 text-slate-900">
            Cómo trabajamos
          </h2>
          <p class="text-slate-500">
            Un proceso estructurado para garantizar el éxito de tu proyecto.
          </p>
        </div>

        <!-- Steps -->
        <div class="relative">
          <!-- Connector line (decorative) -->
          <div
            class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-steel/20 via-brand-sakura_dark/20 to-transparent -translate-y-1/2 z-0"
            aria-hidden="true"
          ></div>

          <ol class="grid md:grid-cols-4 gap-8 relative z-10">
            @for (step of steps; track step.number; let i = $index) {
              <li
                appReveal
                [revealDelay]="i * 100"
                class="text-center"
              >
                <div
                  class="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-slate-900"
                  [style.box-shadow]="'0 0 20px ' + step.glowColor"
                  aria-hidden="true"
                >
                  {{ step.number }}
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">{{ step.title }}</h3>
                <p class="text-sm text-slate-600">{{ step.description }}</p>
              </li>
            }
          </ol>
        </div>
      </div>
    </section>
  `,
})
export class ProcesoComponent {
  readonly steps: ProcessStep[] = [
    {
      number: '1',
      title: 'Análisis',
      description:
        'Entendemos tus retos, definimos alcances y trazamos la arquitectura ideal.',
      glowColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      number: '2',
      title: 'Diseño y UI/UX',
      description:
        'Prototipamos interfaces intuitivas y modernas centradas en el usuario.',
      glowColor: 'rgba(139, 92, 246, 0.2)',
    },
    {
      number: '3',
      title: 'Desarrollo Ágil',
      description:
        'Escribimos código limpio, realizamos entregas parciales y pruebas rigurosas.',
      glowColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      number: '4',
      title: 'Lanzamiento',
      description:
        'Despliegue seguro, capacitación a tu equipo y soporte continuo garantizado.',
      glowColor: 'rgba(139, 92, 246, 0.2)',
    },
  ];
}

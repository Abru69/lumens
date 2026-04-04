import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TechItem } from '../../shared/models/models';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="tecnologias"
      class="py-24 relative overflow-hidden"
      aria-labelledby="tecnologias-heading"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          id="tecnologias-heading"
          appReveal
          class="text-xl font-semibold text-slate-500 mb-10 tracking-wider uppercase"
        >
          Stack Tecnológico Moderno
        </h2>

        <ul
          appReveal
          [revealDelay]="100"
          class="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          aria-label="Tecnologías que utilizamos"
          (mouseenter)="hovered = true"
          (mouseleave)="hovered = false"
        >
          @for (tech of technologies; track tech.name) {
            <li
              class="flex items-center gap-2 text-2xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default"
              [style.color]="hovered ? tech.hoverColor : ''"
            >
              <i [class]="tech.icon + ' text-4xl'" aria-hidden="true"></i>
              {{ tech.name }}
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class TecnologiasComponent {
  hovered = false;

  readonly technologies: TechItem[] = [
    { name: 'Angular', icon: 'ph ph-angular-logo', hoverColor: '#dd1b16' },
    { name: 'React', icon: 'ph ph-atom', hoverColor: '#61dafb' },
    { name: 'Node.js', icon: 'ph ph-hexagon', hoverColor: '#339933' },
    { name: 'TypeScript', icon: 'ph ph-file-ts', hoverColor: '#3178c6' },
    { name: 'Tailwind', icon: 'ph ph-wind', hoverColor: '#38bdf8' },
  ];
}

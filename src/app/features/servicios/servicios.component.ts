import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ServiceCard } from '../../shared/models/models';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="servicios" class="py-24 relative" aria-labelledby="servicios-heading">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div appReveal class="mb-16 md:flex md:justify-between md:items-end">
          <div class="max-w-2xl">
            <h2 id="servicios-heading" class="text-4xl font-bold mb-4 text-slate-900">
              Nuestros Servicios
            </h2>
            <p class="text-slate-500 text-lg">
              Soluciones integrales de software diseñadas para modernizar
              y potenciar tu infraestructura digital.
            </p>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid lg:grid-cols-3 gap-6" role="list">
          @for (service of services; track service.title; let i = $index) {
            <article
              appReveal
              [revealDelay]="i * 150"
              class="glass-card p-8 group"
              role="listitem"
            >
              <i
                [class]="service.icon + ' text-4xl mb-6 block transition-colors ' + service.iconColorClass"
                aria-hidden="true"
              ></i>

              <h3 class="text-2xl font-bold mb-4 text-slate-900 group-hover:text-gradient transition-all">
                {{ service.title }}
              </h3>

              <p class="text-slate-600 mb-6 leading-relaxed">{{ service.description }}</p>

              <ul class="space-y-2 text-sm text-slate-500 mb-8" aria-label="Características incluidas">
                @for (feature of service.features; track feature) {
                  <li class="flex items-center gap-2">
                    <i [class]="'ph ph-check-circle ' + service.checkColorClass" aria-hidden="true"></i>
                    {{ feature }}
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServiciosComponent {
  readonly services: ServiceCard[] = [
    {
      icon: 'ph ph-code text-slate-400 group-hover:text-brand-steel',
      title: 'Sistemas a Medida',
      description:
        'Desarrollo de ERPs, CRMs y plataformas internas que se adaptan exactamente a la lógica de tu negocio. Automatiza tareas y centraliza tu información.',
      features: [
        'Dashboards analíticos',
        'Gestión de bases de datos',
        'Automatización de flujos',
      ],
      colorClass: 'bg-brand-steel/5 border-brand-steel/10',
      iconColorClass: 'text-slate-400 group-hover:text-brand-steel',
      checkColorClass: 'text-brand-steel',
    },
    {
      icon: 'ph ph-globe',
      title: 'Desarrollo Web Profesional',
      description:
        'Landing pages de alta conversión, e-commerce y sitios corporativos ultra rápidos, optimizados para SEO y experiencia de usuario (UX).',
      features: [
        'Diseño UI/UX moderno',
        'Optimización de rendimiento',
        'Diseño 100% Responsivo',
      ],
      colorClass: 'bg-brand-sakura_dark/10 border-brand-sakura_dark/20',
      iconColorClass: 'text-slate-400 group-hover:text-brand-sakura_dark',
      checkColorClass: 'text-brand-sakura_dark',
    },
    {
      icon: 'ph ph-wrench',
      title: 'Mantenimiento y Soporte',
      description:
        'Mantenemos tus sistemas actualizados, seguros y funcionando al 100%. Resolvemos incidencias técnicas para que tú te enfoques en vender.',
      features: [
        'Actualizaciones de seguridad',
        'Monitoreo 24/7',
        'Migraciones y respaldos',
      ],
      colorClass: 'bg-slate-100 border-slate-200',
      iconColorClass: 'text-slate-400 group-hover:text-slate-600',
      checkColorClass: 'text-slate-500',
    },
  ];
}

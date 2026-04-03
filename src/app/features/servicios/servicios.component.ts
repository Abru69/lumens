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
            <h2 id="servicios-heading" class="text-4xl font-bold mb-4 text-white">
              Nuestros Servicios
            </h2>
            <p class="text-gray-400 text-lg">
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

              <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                {{ service.title }}
              </h3>

              <p class="text-gray-400 mb-6 leading-relaxed">{{ service.description }}</p>

              <ul class="space-y-2 text-sm text-gray-500 mb-8" aria-label="Características incluidas">
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
      icon: 'ph ph-code text-gray-500 group-hover:text-blue-400',
      title: 'Sistemas a Medida',
      description:
        'Desarrollo de ERPs, CRMs y plataformas internas que se adaptan exactamente a la lógica de tu negocio. Automatiza tareas y centraliza tu información.',
      features: [
        'Dashboards analíticos',
        'Gestión de bases de datos',
        'Automatización de flujos',
      ],
      colorClass: 'bg-blue-500/10 border-blue-500/20',
      iconColorClass: 'text-gray-500 group-hover:text-blue-400',
      checkColorClass: 'text-blue-500',
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
      colorClass: 'bg-purple-500/10 border-purple-500/20',
      iconColorClass: 'text-gray-500 group-hover:text-purple-400',
      checkColorClass: 'text-purple-500',
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
      colorClass: 'bg-green-500/10 border-green-500/20',
      iconColorClass: 'text-gray-500 group-hover:text-green-400',
      checkColorClass: 'text-green-500',
    },
  ];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ProjectCard } from '../../shared/models/models';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="proyectos"
      class="py-24 bg-white relative border-t border-slate-200"
      aria-labelledby="proyectos-heading"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div appReveal class="mb-16 md:flex md:justify-between md:items-end">
          <div class="max-w-2xl">
            <h2 id="proyectos-heading" class="text-4xl font-bold mb-4 text-slate-900">
              Proyectos Destacados
            </h2>
            <p class="text-slate-500 text-lg">
              Explora cómo hemos transformado negocios reales con nuestras
              soluciones tecnológicas a medida.
            </p>
          </div>
          <div class="hidden md:block">
            <a
              href="#contacto"
              class="text-brand-steel hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-semibold"
            >
              Ver todos los proyectos
              <i class="ph ph-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid lg:grid-cols-2 gap-8">

          <!-- Real Project Card -->
          @for (project of projects; track project.title) {
            <article appReveal class="glass-card overflow-hidden group">
              <!-- Image -->
              <div class="relative h-64 overflow-hidden bg-slate-100 border-b border-slate-200">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" aria-hidden="true"></div>
                <img
                  [src]="project.imageUrl"
                  [alt]="project.imageAlt"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                  width="800"
                  height="500"
                  loading="lazy"
                />
                <!-- Tags -->
                <div class="absolute bottom-4 left-6 z-20 flex items-center gap-2" aria-label="Tecnologías utilizadas">
                  @for (tag of project.tags; track tag.label) {
                    <span [class]="'px-3 py-1 text-xs font-semibold rounded-full border flex items-center gap-1 ' + tag.colorClass">
                      <i [class]="tag.icon" aria-hidden="true"></i>
                      {{ tag.label }}
                    </span>
                  }
                </div>
              </div>

              <!-- Content -->
              <div class="p-8 relative">
                <!-- External Link -->
                <a
                  [href]="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="absolute top-8 right-8 w-12 h-12 bg-white hover:bg-brand-steel border border-slate-200 hover:border-brand-steel rounded-full flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  [attr.aria-label]="'Ver proyecto ' + project.title + ' en vivo'"
                >
                  <i class="ph ph-arrow-up-right text-xl" aria-hidden="true"></i>
                </a>

                <h3 class="text-2xl font-bold mb-3 text-slate-900 group-hover:text-gradient transition-all pr-16">
                  {{ project.title }}
                </h3>
                <p class="text-slate-600 mb-6 text-sm leading-relaxed pr-12">
                  {{ project.description }}
                </p>

                <!-- Features -->
                <ul class="flex flex-wrap gap-4 text-sm text-gray-500" aria-label="Características del proyecto">
                  @for (feature of project.features; track feature.label) {
                    <li class="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <i [class]="feature.icon + ' ' + feature.iconColor + ' text-lg'" aria-hidden="true"></i>
                      {{ feature.label }}
                    </li>
                  }
                </ul>
              </div>
            </article>
          }

          <!-- Placeholder Card -->
          <div
            appReveal
            [revealDelay]="150"
            class="glass-card overflow-hidden group border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-12 min-h-[450px]"
            role="complementary"
            aria-label="Espacio para tu próximo proyecto"
          >
            <div class="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-slate-400 group-hover:text-brand-sakura_dark transition-colors">
              <i class="ph ph-plus text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-bold mb-2 text-slate-900">Tu próximo proyecto</h3>
            <p class="text-slate-500 text-sm max-w-xs">
              Estamos listos para desarrollar la solución tecnológica que escalará
              tu negocio al siguiente nivel.
            </p>
            <a
              href="#contacto"
              class="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              Cotizar desarrollo
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProyectosComponent {
  readonly projects: ProjectCard[] = [
    {
      title: 'Unidos Barber Shop',
      description:
        'Plataforma integral de gestión diseñada específicamente para una barbería moderna. Permite a los clientes interactuar digitalmente con el negocio, mejorando la experiencia del usuario y optimizando la administración interna del local.',
      imageUrl:
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800&h=500',
      imageAlt: 'Captura de pantalla de la aplicación Unidos Barber Shop',
      liveUrl: 'https://unidos-barber-frontend.vercel.app/',
      tags: [
        {
          label: 'Angular',
          icon: 'ph ph-angular-logo',
          colorClass:
            'bg-[#dd1b16]/20 text-[#ff4c4c] border-[#dd1b16]/30',
        },
        {
          label: 'Web App',
          icon: '',
          colorClass: 'bg-white/10 text-gray-300 border-white/20',
        },
      ],
      features: [
        { label: 'Gestión de Citas', icon: 'ph ph-calendar-check', iconColor: 'text-purple-400' },
        { label: 'Mobile-First', icon: 'ph ph-device-mobile', iconColor: 'text-blue-400' },
        { label: 'Fast Load (Vercel)', icon: 'ph ph-rocket-launch', iconColor: 'text-green-400' },
      ],
    },
  ];
}

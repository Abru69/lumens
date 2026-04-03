import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../core/directives/reveal.directive';

interface FeatureCard {
  icon: string;
  iconBg: string;
  iconText: string;
  iconBorder: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-24 bg-zinc-950 relative border-t border-white/5" aria-label="Por qué elegirnos">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Header -->
        <div appReveal class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">¿Por qué elegir Lumen Systems?</h2>
          <p class="text-gray-400">
            No solo escribimos código, construimos activos digitales para tu empresa.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid md:grid-cols-3 gap-8" role="list">
          @for (feature of features; track feature.title; let i = $index) {
            <div
              appReveal
              [revealDelay]="(i + 1) * 100"
              class="glass-card p-8"
              role="listitem"
            >
              <div
                class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border"
                [class]="feature.iconBg + ' ' + feature.iconText + ' ' + feature.iconBorder"
                aria-hidden="true"
              >
                <i [class]="feature.icon + ' text-2xl'"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 text-white">{{ feature.title }}</h3>
              <p class="text-gray-400 leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  readonly features: FeatureCard[] = [
    {
      icon: 'ph ph-rocket-launch',
      iconBg: 'bg-blue-500/10',
      iconText: 'text-blue-400',
      iconBorder: 'border-blue-500/20',
      title: 'Desarrollo Orientado a Resultados',
      description:
        'Creamos herramientas que optimizan procesos, reducen costos operativos y mejoran la experiencia de tus usuarios.',
    },
    {
      icon: 'ph ph-shield-check',
      iconBg: 'bg-purple-500/10',
      iconText: 'text-purple-400',
      iconBorder: 'border-purple-500/20',
      title: 'Arquitectura Escalable',
      description:
        'Sistemas preparados para crecer contigo. Utilizamos las mejores prácticas de ingeniería para asegurar estabilidad a largo plazo.',
    },
    {
      icon: 'ph ph-headset',
      iconBg: 'bg-green-500/10',
      iconText: 'text-green-400',
      iconBorder: 'border-green-500/20',
      title: 'Soporte y Claridad',
      description:
        'Comunicación transparente en cada etapa. Hablamos tu idioma, sin tecnicismos innecesarios, enfocándonos en tus objetivos.',
    },
  ];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-slate-200 bg-slate-50 pt-16 pb-8" role="contentinfo">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <!-- Brand -->
          <div class="md:col-span-2">
            <a href="#" class="flex items-center gap-2 mb-4" aria-label="AltusDev - Inicio">
              <img src="images/logo.png" alt="AltusDev Logo" class="h-12 w-auto" />
            </a>
            <p class="text-slate-500 text-sm max-w-sm mb-6">
              Tecnología clara. Soluciones reales.<br>
              Fundada por <strong class="text-slate-700">Alan Herrera</strong>.
            </p>
            <div class="flex gap-4" aria-label="Redes sociales">
              @for (social of socialLinks; track social.label) {
                <a
                  [href]="social.href"
                  class="text-slate-400 hover:text-slate-800 transition-colors"
                  [attr.aria-label]="social.label"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i [class]="social.icon + ' text-2xl'" aria-hidden="true"></i>
                </a>
              }
            </div>
          </div>

          <!-- Services Links -->
          <nav aria-label="Servicios">
            <h4 class="text-slate-900 font-semibold mb-4">Servicios</h4>
            <ul class="space-y-2 text-sm text-slate-500">
              @for (link of serviceLinks; track link.label) {
                <li>
                  <a [href]="link.href" class="hover:text-brand-sakura_dark transition-colors">
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Company Links -->
          <nav aria-label="Empresa">
            <h4 class="text-slate-900 font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2 text-sm text-slate-500">
              @for (link of companyLinks; track link.label) {
                <li>
                  <a [href]="link.href" class="hover:text-brand-sakura_dark transition-colors">
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">© {{ currentYear }} AltusDev. Todos los derechos reservados.</p>
          <div class="flex gap-4 text-sm text-slate-500">
            <a href="#" class="hover:text-slate-800 transition-colors">Términos</a>
            <a href="#" class="hover:text-slate-800 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    { href: 'https://github.com/Abru69', icon: 'ph ph-github-logo', label: 'GitHub' },
  ];

  readonly serviceLinks = [
    { href: '#servicios', label: 'Sistemas a Medida' },
    { href: '#servicios', label: 'Desarrollo Web' },
    { href: '#servicios', label: 'Mantenimiento' },
    { href: '#contacto', label: 'Consultoría IT' },
  ];

  readonly companyLinks = [
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#contacto', label: 'Contacto' },
  ];
}

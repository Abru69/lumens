import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('mobileMenu', [
      state('closed', style({ opacity: 0, transform: 'translateY(-10px)', display: 'none' })),
      state('open', style({ opacity: 1, transform: 'translateY(0)', display: 'block' })),
      transition('closed => open', [
        style({ display: 'block', opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition('open => closed', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],
  template: `
    <nav
      id="navbar"
      [class.nav-scrolled]="isScrolled()"
      class="fixed w-full z-50 top-0 transition-all duration-300"
      [class.py-4]="!isScrolled()"
      [class.py-3]="isScrolled()"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group" aria-label="AltusDev - Inicio">
          <span class="font-extrabold text-2xl tracking-tight text-slate-900">AltusDev</span>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500" role="menubar">
          @for (link of navLinks; track link.href) {
            <a
              [href]="link.href"
              class="hover:text-slate-900 transition-colors"
              role="menuitem"
            >{{ link.label }}</a>
          }
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex">
          <a
            href="#contacto"
            class="btn-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Iniciar Proyecto
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen()"
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
        >
          <i [class]="mobileMenuOpen() ? 'ph ph-x text-2xl' : 'ph ph-list text-2xl'" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        [@mobileMenu]="mobileMenuOpen() ? 'open' : 'closed'"
        class="md:hidden bg-white/95 border-t border-slate-200 backdrop-blur-xl"
      >
        <div class="max-w-7xl mx-auto px-6 py-4 space-y-3" role="menu">
          @for (link of navLinks; track link.href) {
            <a
              [href]="link.href"
              class="block text-slate-600 hover:text-slate-900 py-2 text-sm font-medium transition-colors"
              (click)="closeMobileMenu()"
              role="menuitem"
            >{{ link.label }}</a>
          }
          <a
            href="#contacto"
            class="block btn-primary text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-4"
            (click)="closeMobileMenu()"
          >
            Iniciar Proyecto
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);

  readonly isScrolled = this.scrollService.scrollY;
  readonly mobileMenuOpen = signal(false);

  readonly navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#tecnologias', label: 'Tecnologías' },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollService.updateScrollY(window.scrollY);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}

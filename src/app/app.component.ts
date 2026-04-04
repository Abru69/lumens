import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/hero/hero.component';
import { FeaturesComponent } from './features/features/features.component';
import { ServiciosComponent } from './features/servicios/servicios.component';
import { ProyectosComponent } from './features/proyectos/proyectos.component';
import { ProcesoComponent } from './features/proceso/proceso.component';
import { TecnologiasComponent } from './features/tecnologias/tecnologias.component';
import { ContactoComponent } from './features/contacto/contacto.component';
import { SakuraPetalsComponent } from './shared/components/sakura-petals/sakura-petals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    ServiciosComponent,
    ProyectosComponent,
    ProcesoComponent,
    TecnologiasComponent,
    ContactoComponent,
    SakuraPetalsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
    >
      Saltar al contenido principal
    </a>

    <app-sakura-petals />
    <app-navbar />

    <main id="main-content">
      <app-hero />
      <app-features />
      <app-servicios />
      <app-proyectos />
      <app-proceso />
      <app-tecnologias />
      <app-contacto />
    </main>

    <app-footer />
  `,
})
export class AppComponent {}

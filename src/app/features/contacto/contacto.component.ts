import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ContactService } from '../../core/services/contact.service';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-8px)' })),
      ]),
    ]),
    trigger('buttonState', [
      transition('idle <=> loading', [
        animate('200ms ease'),
      ]),
    ]),
  ],
  template: `
    <section
      id="contacto"
      class="py-24 relative"
      aria-labelledby="contacto-heading"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-brand-sakura/20 z-0" aria-hidden="true"></div>

      <div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center glass-card p-12 lg:p-20 border-slate-200">

        <!-- Heading -->
        <h2
          id="contacto-heading"
          appReveal
          class="text-4xl lg:text-5xl font-bold mb-6 text-slate-900"
        >
          ¿Listo para transformar tu empresa?
        </h2>

        <p appReveal [revealDelay]="100" class="text-xl text-slate-500 mb-10">
          Alan Herrera y el equipo de AltusDev están listos para analizar
          tu caso y proponerte la mejor arquitectura tecnológica.
        </p>

        <!-- Form -->
        <form
          appReveal
          [revealDelay]="200"
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="max-w-md mx-auto space-y-4"
          novalidate
          aria-label="Formulario de contacto"
        >
          <!-- Email Field -->
          <div>
            <label for="email" class="sr-only">Correo electrónico profesional</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              placeholder="Tu correo electrónico profesional"
              autocomplete="email"
              [ngClass]="isEmailInvalid ? 'border-red-500' : 'border-slate-200'"
              class="w-full px-5 py-4 bg-white/80 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
              [attr.aria-invalid]="isEmailInvalid"
              aria-describedby="email-error"
            />

            <!-- Validation error message -->
            @if (isEmailInvalid) {
              <p
                @fadeInUp
                id="email-error"
                class="mt-2 text-sm text-red-600 text-left"
                role="alert"
              >
                @if (emailControl?.errors?.['required']) {
                  El correo electrónico es requerido.
                } @else if (emailControl?.errors?.['email']) {
                  Ingresa un correo electrónico válido.
                }
              </p>
            }
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            [disabled]="submitStatus() === 'loading'"
            class="btn-primary w-full text-white px-8 py-4 rounded-xl text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all"
            [attr.aria-busy]="submitStatus() === 'loading'"
          >
            @switch (submitStatus()) {
              @case ('loading') {
                <i class="ph ph-spinner animate-spin text-xl" aria-hidden="true"></i>
                Enviando...
              }
              @case ('success') {
                <i class="ph ph-check-circle text-xl" aria-hidden="true"></i>
                ¡Propuesta enviada!
              }
              @case ('error') {
                <i class="ph ph-warning text-xl" aria-hidden="true"></i>
                Reintentar envío
              }
              @default {
                Solicitar Propuesta
              }
            }
          </button>

          <!-- Status messages -->
          @if (submitStatus() === 'success') {
            <p @fadeInUp class="text-sm text-green-600" role="status">
              ✓ Recibimos tu solicitud. Te contactaremos en menos de 24 horas laborables.
            </p>
          }
          @if (submitStatus() === 'error') {
            <p @fadeInUp class="text-sm text-red-600" role="alert">
              Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.
            </p>
          }
        </form>

        <p
          appReveal
          [revealDelay]="300"
          class="text-sm text-slate-400 mt-6"
        >
          Responderemos en menos de 24 horas laborables.
        </p>
      </div>
    </section>
  `,
})
export class ContactoComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly submitStatus = signal<SubmitStatus>('idle');

  readonly contactForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get emailControl() {
    return this.contactForm.get('email');
  }

  get isEmailInvalid(): boolean {
    const ctrl = this.emailControl;
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    // Mark all fields as touched to trigger validation display
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    this.submitStatus.set('loading');

    this.contactService
      .submitProposal({ email: this.emailControl?.value })
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.submitStatus.set('success');
            this.contactForm.reset();
          } else {
            this.submitStatus.set('error');
          }
        },
        error: () => {
          this.submitStatus.set('error');
        },
      });
  }
}

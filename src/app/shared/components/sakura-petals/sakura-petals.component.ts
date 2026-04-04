import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sakura-petals',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="sakura-container" [class.is-scrolling]="isScrolling">
      @for (petal of petals; track $index) {
        <div class="petal" [ngStyle]="petal.style"></div>
      }
    </div>
  `,
  styles: [`
    .sakura-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      pointer-events: none;
      z-index: 40; /* Background layer behind text/cards */
      opacity: 0.2; /* Subdued when idle */
      transition: opacity 0.5s ease;
    }

    .sakura-container.is-scrolling {
      opacity: 0.8; /* Highlighted during scroll */
    }

    .petal {
      position: absolute;
      background: linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%);
      border-radius: 15px 0px 15px 0px;
      box-shadow: 0 2px 4px rgba(244, 114, 182, 0.3);
      animation-name: fall, sway;
      animation-iteration-count: infinite, infinite;
      animation-timing-function: linear, ease-in-out;
      animation-direction: normal, alternate;
      will-change: transform, top;
    }

    @keyframes fall {
      0% {
        top: -10%;
      }
      100% {
        top: 110%;
      }
    }

    @keyframes sway {
      0% {
        transform: translateX(0px) rotate(0deg);
      }
      100% {
        transform: translateX(60px) rotate(90deg);
      }
    }
  `]
})
export class SakuraPetalsComponent {
  petals = Array.from({ length: 40 }).map(() => this.createPetal());
  isScrolling = false;
  private scrollTimeout: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolling = true;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 400); // 400ms after scroll stops
  }

  private createPetal() {
    const size = Math.random() * 8 + 6; // 6px to 14px
    const left = Math.random() * 100; // 0vw to 100vw
    const durationFall = Math.random() * 8 + 8; // 8s to 16s
    const durationSway = Math.random() * 3 + 2; // 2s to 5s
    const delay = Math.random() * -20; // random start

    return {
      style: {
        width: `${size}px`,
        height: `${size * 1.3}px`, 
        left: `${left}vw`,
        'animation-duration': `${durationFall}s, ${durationSway}s`,
        'animation-delay': `${delay}s, ${delay}s`,
        opacity: Math.random() * 0.5 + 0.4 // Extra random opacity per petal
      }
    };
  }
}

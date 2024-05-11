import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  navi(): void {
    const naviElement = this.elementRef.nativeElement.querySelector('#navi');
    if (naviElement && naviElement.offsetHeight === 70) {
      this.big();
    } else {
      this.small();
    }
  }
  big(): void {
    const smallElement = this.elementRef.nativeElement.querySelector('#small');
    const svgElement = this.elementRef.nativeElement.querySelector('#svg');
    const ntextElement = this.elementRef.nativeElement.querySelector('#ntext');
    const naviElement = this.elementRef.nativeElement.querySelector('#navi');
    const rotElement = this.elementRef.nativeElement.querySelector('#rot');
  
    if (smallElement) {
      smallElement.style.display = 'none';
    }
  
    if (svgElement) {
      svgElement.style.cssText = 'height:50%; width:50%;';
    }
  
    if (ntextElement) {
      ntextElement.style.display = 'block';
    }
  
    if (naviElement) {
      this.renderer.setStyle(naviElement, 'height', '100%');
    }
  
    if (rotElement) {
      rotElement.style.transform = 'rotate(270deg)';
    }
  }
  
  small(): void {
    const ntextElement = this.elementRef.nativeElement.querySelector('#ntext');
    const naviElement = this.elementRef.nativeElement.querySelector('#navi');
    const smallElement = this.elementRef.nativeElement.querySelector('#small');
    const svgElement = this.elementRef.nativeElement.querySelector('#svg');
    const rotElement = this.elementRef.nativeElement.querySelector('#rot');

    if (ntextElement) {
      ntextElement.style.display = 'none';
      ntextElement.style.opacity = '1';
    }

    if (naviElement) {
      this.renderer.setStyle(naviElement, 'height', '70px');
      this.renderer.setStyle(naviElement, 'backgroundColor', 'linear-gradient(145deg,white,black,white)');
    }

    if (smallElement) {
      smallElement.style.display = 'flex';
    }

    if (svgElement) {
      svgElement.style.cssText = 'height:0%; width:0%; transition: all 0.3s';
    }

    if (rotElement) {
      rotElement.style.transition = 'all 0.5s';
      rotElement.style.transform = 'rotate(90deg)';
    }
  }
}

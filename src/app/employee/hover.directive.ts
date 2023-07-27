
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  
  
  
    @HostListener('mouseenter')
  
    onMouseEnter() {
  
      this.highlight('pink'); // Change the color to your desired hover color
  
    }
  
  
  
  
    @HostListener('mouseleave')
  
    onMouseLeave() {
  
      this.highlight(null); // Revert back to the original color
  
    }
  
  
  
  
    private highlight(color: string | null) {
  
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  
    }
  
  }
  



import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appFeatureJob]'
})
export class FeatureJobDirective implements OnChanges{

  @Input() isFeature: boolean | undefined = false;
  private featureColor: string = 'linear-gradient(to right, #FFF6E6, #FFFFFF)';
  private none: string = 'none';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  private handleChangColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background', color);
  }

  ngOnChanges(): void {
    if(this.isFeature) {
      this.handleChangColor(this.featureColor);
    } else {
      this.handleChangColor(this.none);
    }
  }
}

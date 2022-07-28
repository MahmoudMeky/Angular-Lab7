import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') mouseEnterHandler() {
    (this.el.nativeElement as HTMLDivElement).style.transition = '400ms';

    (this.el.nativeElement as HTMLDivElement).style.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') mouseLeaveHandler() {
    (this.el.nativeElement as HTMLDivElement).style.backgroundColor = 'unset'
  }
}

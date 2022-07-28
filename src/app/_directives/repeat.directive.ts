import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  // @Input() appRepeat: number = 1;


  @Input() set appRepeat(v: number) {
    for (let index = 0; index < v; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, { index: index });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  // ngOnInit() {
  //   // for (let index = 0; index < this.appRepeat; index++) {
  //   //   this.viewContainer.createEmbeddedView(this.templateRef, { index: index });
  //   // }
  // }


}

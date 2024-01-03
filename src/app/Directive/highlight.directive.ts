import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input () appHighLight = 'blue';
  constructor( private el: ElementRef  ) {
    console.log(HighlightDirective, this.appHighLight)
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
  }
}

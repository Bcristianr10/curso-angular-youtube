import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleBrothers]'
})
export class StyleBrothersDirective {

  constructor( private element: ElementRef) 
  {
    this.element.nativeElement.style.backgroundColor = "#1976d2";
    this.element.nativeElement.style.color = "white";
    this.element.nativeElement.style.padding = ".4rem";
   }

}

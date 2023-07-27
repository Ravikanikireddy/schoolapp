import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementRef:ElementRef) {
    elementRef.nativeElement.style.color = "green";
    elementRef.nativeElement.style.backgroundColor = "orange"
    elementRef.nativeElement.style.fontSize = "35px"
   }

}

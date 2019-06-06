import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appFormatText]'
})
export class FormatTextDirective {

  constructor(private el: ElementRef) { }

  @Input('appFormatText') format;

@HostListener('blur') onBlur(){
  let val: String = this.el.nativeElement.value
  if (this.format == 'upper') {
      this.el.nativeElement.value = val.toLocaleUpperCase();
  }else{
    this.el.nativeElement.value = val.toLocaleLowerCase();

  }
  }
}

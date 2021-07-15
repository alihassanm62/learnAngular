import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') inputProperty;
  constructor(private el:ElementRef) { }

  @HostListener('blur') onFocus(){

    var value:string=this.el.nativeElement.value;
    if(this.inputProperty=='lowercase')
    this.el.nativeElement.value=value.toLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();


  }
}

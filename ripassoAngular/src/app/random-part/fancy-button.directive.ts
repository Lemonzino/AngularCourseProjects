import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFancyButton]'
})
export class FancyButtonDirective {
  @Input('appFancyButton') radiusValue;
  @HostBinding('style.backgroundColor') backRedColor;
  @HostBinding('style.border-radius') bordRadius;
  @HostListener('click') btnClicked() {
    this.backRedColor = 'red';
  }
  @HostListener('mouseover') hoverBtn() {
    if(this.radiusValue != null) {
      this.bordRadius = this.radiusValue;
    }
  } 
  @HostListener('mouseout') outBtn() {
    this.bordRadius = '4px';
    this.backRedColor = 'blue';
  }

  constructor() { }

}

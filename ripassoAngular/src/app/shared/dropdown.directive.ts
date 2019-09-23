import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggleDropdown;
  @HostListener('click') dropdownActivated() {
    if(!this.toggle) {
      this.toggleDropdown = true;
      this.toggle = !this.toggle;
    } else {
      this.toggleDropdown = false;
      this.toggle = !this.toggle;
    }
  }

  toggle: boolean = false;

  constructor() { 
  }

}

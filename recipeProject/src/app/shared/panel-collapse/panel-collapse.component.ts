import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-panel-collapse',
  templateUrl: './panel-collapse.component.html',
  styleUrls: ['./panel-collapse.component.css'],
  animations: [
    trigger('panelShow', [
			state('in', style({
				opacity: 1,
				transform: 'translateY(0)'
			})),
			transition('void => *', [
				style({
					opacity: 0,
          transform: 'translateY(-40px)'
				}),
				animate(300)
			]),
			transition('* => void', [
				animate(300, style({
					opacity: 0,
          transform: 'translateY(-40px)'
				}))
			]),
		]),
  ]
})
export class PanelCollapseComponent implements OnInit {
  @Input('labelValueClose') closeValue: string = "Close panel";
  @Input('labelValueOpen') openValue: string = "Open panel";
  @Input('startValue') labelShown: boolean = false;
  
  labelValue: string;

  constructor() { }

  ngOnInit() {
    if(this.labelShown) {
      this.labelValue = this.openValue;
    } else {
      this.labelValue = this.closeValue;
    }
  }

  onToggleFilter() {
    this.labelShown = !this.labelShown;
    if(this.labelShown) {
      this.labelValue = this.openValue;
    } else {
      this.labelValue = this.closeValue;
    }
  }
}

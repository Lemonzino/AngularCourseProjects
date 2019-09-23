import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomService } from '../randomServices/random.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-el1',
  templateUrl: './random-el1.component.html',
  styleUrls: ['./random-el1.component.css']
})
export class RandomEl1Component implements OnInit, OnDestroy {
  el1Values: string[];
  updateSubscription: Subscription;

  constructor(
    private randomService: RandomService
  ) { }

  ngOnInit() {
    this.updateSubscription = this.randomService.el1Changed.subscribe(
      (data: string[]) => {
        this.el1Values = data;
      }
    );
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  onSend(value: string) {
    this.randomService.addValueOnEl2(value);
  }

  getColor(val: number) {
    if(val == 0) {
      return "red";
    } else if(val == 10) {
      return "purple";
    } else if(val % 2 == 0) {
      return "green";
    } else if(val % 2 != 0) {
      return "blue";
    }
  }

  getBackColor(val: number) {
    if(val == 0) {
      return "transparent";
    } else if(val == 10) {
      return "transparent";
    } else if(val % 2 == 0) {
      return "black";
    } else if(val % 2 != 0) {
      return "red";
    }
  }
}

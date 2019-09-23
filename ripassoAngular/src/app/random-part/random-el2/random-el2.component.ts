import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomService } from '../randomServices/random.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-el2',
  templateUrl: './random-el2.component.html',
  styleUrls: ['./random-el2.component.css']
})
export class RandomEl2Component implements OnInit, OnDestroy {
  el2Values: string[];
  updateSubscription: Subscription;

  constructor(
    private randomService: RandomService
  ) { }

  ngOnInit() {
    this.updateSubscription = this.randomService.el2Changed.subscribe(
      (data: string[]) => {this.el2Values = data}
    );
  }

  onSend() {
    let val: string = Math.random().toString();
    this.randomService.addValueOnEl1(val);
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
}

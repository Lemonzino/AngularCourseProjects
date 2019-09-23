import { Component, OnInit } from '@angular/core';
import { RandomCountService } from './randomServices/randomCount.service';

@Component({
  selector: 'app-random-part',
  templateUrl: './random-part.component.html',
  styleUrls: ['./random-part.component.css']
})
export class RandomPartComponent implements OnInit {

  constructor(
    private randomCounter: RandomCountService
  ) { }

  ngOnInit() {
  }

}

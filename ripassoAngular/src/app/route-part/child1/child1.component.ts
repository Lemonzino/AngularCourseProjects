import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  queryPar: string = "";
  dataVal : string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.queryPar = this.route.snapshot.queryParams['dataInfo'];

    this.route.data.subscribe(
      (data: Data) => {
        this.dataVal = data['title'];
      }
    );
  }

}

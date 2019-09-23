import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  data: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router) {
  }

  ngOnInit() {
    this.data = this.route.snapshot.params['id'];
  }

  onAddData() {
    this.router.navigate(["testData"], {relativeTo: this.route});
  }

  onNavigateToHome() {
    this.router.navigate(
      ["routerZone", "child1"], 
      {
        queryParams: 
        {
          'dataInfo': this.data
        }
      }
    );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.data != null && this.data.length > 0) {
			return confirm("Sicuro di voler procedere?");
		} else {
      return true;
    }
  }
}

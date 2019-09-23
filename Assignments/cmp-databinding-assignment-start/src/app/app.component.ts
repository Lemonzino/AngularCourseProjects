import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    numberEmitted: number = [];

    getTick(event) {
        this.numberEmitted.push(event.num);
    }

}

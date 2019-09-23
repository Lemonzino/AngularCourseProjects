import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    toggle = false;
    index = 0;
    tries = [];

    btnClick() {
        this.toggle = !this.toggle;
        this.index++;
        this.tries.push(this.index)
    }

    getColor(index) {
        if(index >= 5) {
            return 'blue';
        }
    }

}

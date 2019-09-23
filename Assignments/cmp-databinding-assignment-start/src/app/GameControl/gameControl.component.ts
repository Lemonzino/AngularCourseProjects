import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-gamecontrol',
    templateUrl: './gameControl.component.html'
})
export class GameControlComponent {
    @Output('tick') tickEvent = new EventEmitter<{num: number}>();
    tickCount: number = 0;
    ref;

    startGame() {
        if(this.ref == null) {
            this.ref = setInterval(() => {
                this.tickCount++;
                this.tickEvent.emit({num: this.tickCount});
            }, 1000);
        }
    }

    stopGame() {
        clearInterval(this.ref);
        this.ref = null;
    }
}

import { Injectable } from "@angular/core";
import { RandomCountService } from "./randomCount.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RandomService {
    constructor(private count: RandomCountService) {}

    private el1Values: string[] = [];
    private el2Values: string[] = [];

    el1Changed = new Subject<string[]>();
    el2Changed = new Subject<string[]>();

    addValueOnEl1(val: string) {
        this.count.incEl1();
        this.el1Values.push(val);
        this.el1Changed.next(this.el1Values.slice());
    }

    addValueOnEl2(val: string) {
        this.count.incEl2();
        this.el2Values.push(val);
        this.el2Changed.next(this.el2Values.slice());
    }
}
import { Component, OnInit, Input, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
    @Input('srvElement') element: {type: string, name: string, content: string};
    @ContentChild("contentParagraph") paragraph: ElementRef;

    constructor() { }

    ngOnInit() {
        console.log("Text " + this.paragraph.nativeElement.textContent);
    }

    ngAfterContentInit() {
        console.log("Text " + this.paragraph.nativeElement.textContent);
    }
}

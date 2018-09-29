import {Component} from '@angular/core';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent {
    a: number;

    constructor() {
        this.a = 33;
    }
}

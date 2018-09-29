import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';

    close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
    }
}

import {Component, ViewChild, Output, EventEmitter} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;
    reason = '';
    showSearch = false;
    searchInput = '';

    @Output()
    search: EventEmitter<string> = new EventEmitter<string>(null);
    searchProjects() {
        this.search.emit(this.searchInput);
    }
    close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
    }
}

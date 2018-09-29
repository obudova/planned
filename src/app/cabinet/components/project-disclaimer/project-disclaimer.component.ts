import { Component, Input } from '@angular/core';
@Component({
  selector: 'project-disclaimer',
  templateUrl: './project-disclaimer.component.html',
  styleUrls: ['./project-disclaimer.component.scss']
})
export class ProjectDisclaimerComponent {
  @Input()
  project: any;
}

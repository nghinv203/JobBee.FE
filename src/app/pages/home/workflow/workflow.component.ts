import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-workflow',
  imports: [
    TranslatePipe
  ],
  templateUrl: './workflow.component.html',
  standalone: true,
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {

}

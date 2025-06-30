import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.scss'
})
export class PostJobComponent {

}

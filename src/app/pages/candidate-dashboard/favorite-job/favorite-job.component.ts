import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-favorite-job',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './favorite-job.component.html',
  styleUrl: './favorite-job.component.scss'
})
export class FavoriteJobComponent {

}

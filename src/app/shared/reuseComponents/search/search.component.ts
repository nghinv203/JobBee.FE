import {Component, Input} from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import {TranslatePipe} from '@ngx-translate/core';
@Component({
  selector: 'app-search',
  imports: [NzInputModule, TranslatePipe],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() placeHolder: string = '';
  @Input() borderLess: boolean = false;
  @Input() style: string = '';
}

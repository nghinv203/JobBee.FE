import {Component, Input, TemplateRef} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import { NzInputModule } from 'ng-zorro-antd/input';
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
  @Input() addOnBefore!: TemplateRef<void>;

}

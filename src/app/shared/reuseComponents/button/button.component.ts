import {Component, Input} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  imports: [NzButtonModule, TranslatePipe],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() backgroundColor: string = '#0A65CC';
  @Input() color: string = '#FFFFFF';
  @Input() size: 'large'|'small'|'default' = 'large';
  @Input() style: string = '';
  @Input() content: string = 'button';
}

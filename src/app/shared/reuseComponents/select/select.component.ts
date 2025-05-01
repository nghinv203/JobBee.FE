import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  imports: [NzSelectModule, FormsModule, NgTemplateOutlet, TranslatePipe],
  standalone: true,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent{
  @Input() selectedItems!: any[];
  @Input() borderLess: boolean = false;
  @Input() itemTemp!: TemplateRef<any>;
  @Input() selectedItemTemp!: TemplateRef<any>;
  @Input() options!: any[];
  @Input() style: string = '';

  @Output() onSelectItem: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() {

  }
}

import {
  Component, ContentChild,
  EventEmitter,
  Input, OnChanges,
  Output, SimpleChanges,
  TemplateRef
} from '@angular/core';
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
  @Input() selectedItems!: any;
  @Input() borderLess: boolean = false;
  @Input() options!: any[];
  @Input() style: string = '';
  @Input() selectMode: 'multiple' | 'tags' | 'default' = 'default';
  @ContentChild('selectedItemTemp') selectedItemTemplate!: TemplateRef<any>;
  @ContentChild('itemTemp') itemTemplate!: TemplateRef<any>;

  @Output() selectedItemsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
}

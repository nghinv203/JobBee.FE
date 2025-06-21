import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ISearchConfig, ISelectItem} from './search.model';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, Subscription, takeUntil} from 'rxjs';
import {DestroyService} from '../../services/destroy.service';
import {
  NgHeaderTemplateDirective,
  NgLabelTemplateDirective,
  NgMultiLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent
} from '@ng-select/ng-select';
import {NgTemplateOutlet, SlicePipe} from '@angular/common';
import {TruncatePipe} from '../../pipes/truncate/truncate.pipe';
import {DynamicComponent} from '../dynamic/dynamic.component';
import {DefaultComponent} from '../default/default.component';

@Component({
  selector: 'app-search',
  imports: [NzInputModule, TranslatePipe, NzTooltipDirective, ReactiveFormsModule, NgSelectComponent, FormsModule, NgMultiLabelTemplateDirective, SlicePipe, NgTemplateOutlet, NgOptionTemplateDirective, NgLabelTemplateDirective, TruncatePipe, NgHeaderTemplateDirective, DynamicComponent],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [DestroyService]
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() searchConfigs: ISearchConfig[] = [];
  @Input() isLiveSearch: boolean = true;

  @Output() searchChange = new EventEmitter();

  searchForm!: FormGroup;
  dataTypeControl: ISearchConfig | undefined;

  private searchFormSubcription: Subscription | undefined;

  constructor(private fb: FormBuilder, private destroyService: DestroyService) {
  }

  ngOnInit(): void {
    this.generateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if('searchConfigs' in changes) {
      this.generateForm();
    }
  }

  generateForm(): void {
    const arrControl: { [key: string]: any[] } = {};
    this.dataTypeControl = this.searchConfigs.find(c => c.controlType === 'dateType');
    this.searchConfigs.forEach(control => {
      if (control.controlType !== 'presetRange') {
        arrControl[control.controlName] = [control.defaultValue ?? null];
      } else {
        // arrControl[control.controlName] = [control.defaultValue ?? null];
      }
    });
    this.searchForm = this.fb.group(arrControl);
    if(this.searchFormSubcription) {
      this.searchFormSubcription.unsubscribe();
      this.searchFormSubcription = undefined;
    }
    if(this.isLiveSearch) {
      this.searchFormSubcription = this.searchForm.valueChanges
        .pipe(takeUntil(this.destroyService.destroySbj), debounceTime(500))
        .subscribe(valueChange => {
          this.searchChange.emit(valueChange)
        });
    }
  }

  handleClear(control: string): void {
    this.searchForm.get(control)?.patchValue('');
  }

  handleSearch() {
    this.searchChange.emit(this.searchForm.value);
  }

  isSelectItem(obj: any): obj is ISelectItem {
    return obj && typeof obj.name === 'string';
  }

  onLocationChange(controlName: string) {
    const selected = this.searchForm.get(controlName)?.value || [];
    // this.searchConfigs.find(c => c.controlName === controlName)!.selectItems.forEach(item => {
    //   item = selected.includes(item);
    // });
  }

  toggleItem(item: any, event: any) {
    const controlName = 'locationSearch';
    const currentValue = this.searchForm.get(controlName)?.value || [];
    if (event.target.checked) {
      this.searchForm.get(controlName)?.setValue([...currentValue, item]);
    } else {
      this.searchForm.get(controlName)?.setValue(currentValue.filter((i: any) => i.id !== item.id));
    }
  }

  getSelectedCount(controlName: string): number {
    return this.searchForm.get(controlName)?.value.length || 0;
  }

  applyLocation(controlName: string) {
    const selected = this.searchForm.get(controlName)?.value || [];
    console.log('Applied locations:', selected);
  }

  getHiddenLocation(items: any): string {
    let result = '';
    return items;
  }

  protected readonly DefaultComponent = DefaultComponent;
}

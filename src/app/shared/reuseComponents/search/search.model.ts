import {Type} from '@angular/core';

export interface ISearchConfig {
  placeHolder: string[];
  controlName: string;
  controlType: ControlType;
  selectItems?: ISelectItem[];
  defaultValue?: any;
  styles?: {[key: string]: any},
  multiple?: boolean;
  maxSelectItems?: number;
  disableSearch?: boolean;
  componentType?: Type<any>;
}

export type ControlType = 'input' | 'select' | 'timeRange' | 'presetRange' | 'checkbox' | 'radio' | 'chipInput' | 'dateType' | 'location' | 'dynamic';

export interface ISelectItem {
  id: string | number;
  name: string;
}

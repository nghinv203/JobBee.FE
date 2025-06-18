import {ILanguageOption} from './header.model';
import {ISearchConfig} from '../../../shared/reuseComponents/search/search.model';

export const options: ILanguageOption[] = [
  {
    label: 'global.languages.vi',
    value: 'vi',
    img: 'https://flagcdn.com/w40/vn.png',
  },
  {
    label: 'global.languages.en',
    value: 'en',
    img: 'https://flagcdn.com/w40/us.png',
  },
];

export const selectedItems: ILanguageOption = {
  label: 'global.languages.en',
  value: 'en',
  img: 'https://flagcdn.com/w40/us.png'
};

export const searchBarConfig: ISearchConfig[] = [
  {
    controlName: 'search',
    controlType: 'input',
    placeHolder: ['global.searchBar.placeholder'],
    defaultValue: ''
  }
]

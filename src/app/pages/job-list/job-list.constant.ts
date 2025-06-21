import {ISearchConfig} from '../../shared/reuseComponents/search/search.model';

export const searchBarConfig: ISearchConfig[] = [
  {
    controlName: 'keyword',
    controlType: 'input',
    placeHolder: ['global.searchBar.placeholder'],
    defaultValue: ''
  },
  {
    controlName: 'location',
    controlType: 'location',
    placeHolder: ['searchBar.location'],
    multiple: true,
    maxSelectItems: 2,
    disableSearch: true
  },
  {
    controlName: 'category',
    controlType: 'select',
    placeHolder: ['searchBar.category'],
    multiple: true,
    maxSelectItems: 2,
    disableSearch: true
  },
]

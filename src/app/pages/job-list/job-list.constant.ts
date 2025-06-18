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
    selectItems: [
      { id: 1, name: "global.searchBar.placeholder" },
      { id: 2, name: "global.searchBar.placeholder" },
      { id: 3, name: "global.searchBar.placeholder" }
    ],
    placeHolder: ['global.searchBar.placeholder'],
    multiple: true,
    maxSelectItems: 2,
    disableSearch: true
  },
  {
    controlName: 'category',
    controlType: 'select',
    selectItems: [
      { id: 1, name: "global.searchBar.placeholder" },
      { id: 2, name: "global.searchBar.placeholder" },
      { id: 3, name: "global.searchBar.placeholder" }
    ],
    placeHolder: ['global.searchBar.placeholder'],
    multiple: true,
    maxSelectItems: 2,
    disableSearch: true
  },
  {
    controlName: 'category',
    controlType: 'presetRange',
    selectItems: [
      { id: 1, name: "global.searchBar.placeholder" },
      { id: 2, name: "global.searchBar.placeholder" },
      { id: 3, name: "global.searchBar.placeholder" }
    ],
    placeHolder: ['global.searchBar.placeholder'],
    multiple: true,
    maxSelectItems: 2,
    disableSearch: true
  }
]

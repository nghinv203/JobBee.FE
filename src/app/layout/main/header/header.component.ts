import {Component, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SelectComponent} from '../../../shared/reuseComponents/select/select.component';
import {options, selectedItems} from './header.constanst';
import {SearchComponent} from '../../../shared/reuseComponents/search/search.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {ActivatedRoute, Route, Router, RouterLink} from '@angular/router';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {AuthService} from '../../../shared/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    SelectComponent,
    SearchComponent,
    TranslatePipe,
    NzButtonComponent,
    RouterLink,
    NzInputDirective,
    ReactiveFormsModule,
    NzIconDirective,
    NgIf,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  selectedItems = selectedItems;
  options = options;
  searchForm!: FormGroup;

  constructor(private translateService: TranslateService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              public authService: AuthService) {
    const browserLanguage = localStorage.getItem('language') || 'vi';
    if(browserLanguage === 'vi') {
      this.selectedItems = options[0]
    } else if(browserLanguage === 'en') {
      this.selectedItems = options[1]
    }
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      keyword: [null]
    });
    this.route.queryParams.subscribe(params => {
      const query = params['keyword'];
      this.searchForm.get('keyword')?.patchValue(query);
    });
  }

  handleSearch() {
    this.router.navigate(['/jobs'], {queryParams: {keyword: this.searchForm.get('keyword')?.value}});
  }

  handleChangeLanguage(event: any): void {
    this.translateService.use(`${event.value}`);
    localStorage.setItem('language', event.value);
  }

  navigateToDashboard() {
    const role = this.authService.getRole();
    if (role === 'candidate') {
      this.router.navigate(['/candidate-dashboard']);
    } else if (role === 'employer') {
      this.router.navigate(['/employer-dashboard']);
    }
  }
}

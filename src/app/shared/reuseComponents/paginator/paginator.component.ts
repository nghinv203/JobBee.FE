import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  standalone: true,
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent  implements OnChanges{
  @Input() totalPages = 0;
  @Output() page = new EventEmitter<number>();

  currentPage = 1;
  pages: number[] = [];

  ngOnChanges() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadPageData(page);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  loadPageData(page: number) {
    this.page.emit(page);
  }

  padZero(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
}

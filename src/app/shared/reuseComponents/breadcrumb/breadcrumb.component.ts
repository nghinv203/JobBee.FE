import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {TranslatePipe} from '@ngx-translate/core';

 interface BreadCrumb {
  label: string;
  url: string;
 }

@Component({
  selector: 'app-breadcrumb',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit{
  breadcrumbs: BreadCrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadcrumb(this.route.root);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumb(this.route.root)
        console.log(this.breadcrumbs);
      });
  }

  buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    const routeURL = route.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL) {
      url += `/${routeURL}`;
    }

    const label = route.snapshot.data['breadcrumb'];
    if (label) {
      breadcrumbs.push({ label, url });
    }

    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, url, breadcrumbs);
    }

    return breadcrumbs;
  }

}

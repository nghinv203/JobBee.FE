import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {

}

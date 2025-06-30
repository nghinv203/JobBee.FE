import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-employer-detail',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './employer-detail.component.html',
  styleUrl: './employer-detail.component.scss'
})
export class EmployerDetailComponent implements OnInit{
  @Output() sendMessage = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute) {
  }

  handleEmit() {
    this.sendMessage.emit(false);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
  }
}

import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-setup-header',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './setup-header.component.html',
  styleUrl: './setup-header.component.scss'
})
export class SetupHeaderComponent {
  private _message!: string;

  @Input()
  set message(value: string) {
    this._message = value;
  }

  get message():string {
    return this._message;
  }

}

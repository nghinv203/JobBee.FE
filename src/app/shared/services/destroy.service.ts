import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DestroyService implements OnDestroy{
  destroySbj = new Subject<void>();
  constructor() {
  }
  ngOnDestroy(): void {
    this.destroySbj.next();
    this.destroySbj.complete();
  }
}

import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppEnvironmentService {
  HOST_OS = 'https://jobbee.work.gd:5001/api';
  HOST_PAYMENT = 'https://jobbee.work.gd:5001';
}

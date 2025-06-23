import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppEnvironmentService {
  HOST_OS = 'http://54.175.186.165:5000/api';
  HOST_PRODUCTION = ''; // use when deploying
}

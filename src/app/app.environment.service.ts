import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppEnvironmentService {
  HOST_OS = 'https://54.175.186.165:5001/api';
  HOST_PRODUCTION = ''; // use when deploying
}

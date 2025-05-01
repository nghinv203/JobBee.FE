import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, `./i18n/`,  '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })]), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()
  ],
};

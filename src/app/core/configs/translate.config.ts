import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  Translation
} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

const TRANSLATE_NOT_FOUND = 'TRANSLATION NOT FOUND'

export class MissingTranslateHandlerImpl implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): Translation | Observable<Translation> {
    const key: string = params.key;
    return `${TRANSLATE_NOT_FOUND}:${key}`;
  }
}

export function handleLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./i18n/", ".json");
}

export function handleMissingTranslation(): MissingTranslationHandler {
  return new MissingTranslateHandlerImpl();
}

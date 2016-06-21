// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
import { SessionService } from './shared/services/session.service';
import { HelperService } from './shared/services/helper.service';
import { BasicAuth } from './auth/auth-user';
import { UserService } from './users/user.service';
import { NotificationsService } from 'angular2-notifications';
import { SolrService } from './solr/solr.service';

import { AuthService } from './auth/auth.service';
import { SearchService } from './shared/search.service';
import { SettingsService } from './shared/settings.service';
import { AuthGuard } from './auth/auth-guard';
import { TRANSLATE_PROVIDERS,
        TranslateService,
        TranslatePipe,
        TranslateLoader,
        TranslateStaticLoader } from 'ng2-translate/ng2-translate';
// Angular 2 Http
import { Http } from '@angular/http';
import { APP_CONFIG, CONFIG, Config } from './app.config';
import { provide } from '@angular/core';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  SolrService,
  NotificationsService,
  BasicAuth,
  UserService,
  AuthService,
  SearchService,
  SessionService,
  SettingsService,
  HelperService,
  TranslateService,
  AuthGuard,
  provide(APP_CONFIG, { useValue: CONFIG }),
  {
    provide: TranslateLoader,
    useFactory: (http: any) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  }
];

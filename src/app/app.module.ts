import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { TimeInterceptor } from './shared/api/time.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './shared/ui/ui.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translateService: TranslateService) {
    translateService.langs = ['en', 'fr'];
    const lang = translateService.getBrowserLang();
    if (translateService.langs.includes(lang)) {
      translateService.use(lang);
    }
  }
}

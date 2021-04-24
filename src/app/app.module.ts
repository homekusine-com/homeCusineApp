import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulModule } from './common/contentful/content-types/contentful.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContentfulModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

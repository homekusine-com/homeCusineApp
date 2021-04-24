import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { CONTENTFUL_CLIENT } from '../contentful-client.injection-token';
import { ContentfulOpsService } from '../contentful.ops.service';
import { ContentfulService } from '../contentful.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: CONTENTFUL_CLIENT,
      useFactory: () => createClient(environment.contentFul),
    },
    ContentfulService,
    ContentfulOpsService,
  ],
})
export class ContentfulModule {}

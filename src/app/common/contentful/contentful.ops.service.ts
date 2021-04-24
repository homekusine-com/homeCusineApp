import { Inject, Injectable } from '@angular/core';
import { ContentTypesOpsStatus } from './content-types/content-types.ops-status';
import { ContentfulClientApi } from 'contentful';
import { CONTENTFUL_OPS_CLIENT } from './contentful-client.injection-token';

@Injectable()
export class ContentfulOpsService {
  constructor(
    @Inject(CONTENTFUL_OPS_CLIENT) private ContentfulClient: ContentfulClientApi
  ) {}

  async getOutrageType(): Promise<ContentTypesOpsStatus> {
    const status = await this.ContentfulClient.getEntry<ContentTypesOpsStatus>(
      ''
    );

    return {
      ...status.fields,
      outrageStart: new Date(status.fields.outrageStart),
      outrageEnd: new Date(status.fields.outrageEnd),
    };
  }
}

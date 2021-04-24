import { Inject, Injectable } from '@angular/core';
import { createClient, Entry, ContentfulClientApi } from 'contentful';
import { environment } from '../../../environments/environment';
import { Page } from './content-types/content-types.page';
import { CONTENTFUL_CLIENT } from './contentful-client.injection-token';
import { CmsItem } from './contentful.model';
import { resolveCmsType } from './contentful.resolve';

const createFallbackQuery = (query: any) => {
  for (const field in query) {
    if (field.indexOf('fields.') !== -1) {
      return { ...query, [field]: 'default' };
    }
  }
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor(
    @Inject(CONTENTFUL_CLIENT) private contentfulApi: ContentfulClientApi
  ) {}

  getItem = async <TItem>(
    ctor: CmsItem<TItem>,
    query: object
  ): Promise<TItem | null> => {
    let entry = await this.contentfulApi.getEntries(query);

    if (!entry.items.length) {
      const fallbackQuery = createFallbackQuery(query);
      entry = await this.contentfulApi.getEntries(fallbackQuery);
    }

    return resolveCmsType(ctor, entry.items[0]);
  };

  getPages(title?: string): Promise<Page | null> {
    return this.getItem(Page, {
      content_type: 'page',
      'fields.name': title,
    });
  }
}

import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: environment.contentFul.space,
    accessToken: environment.contentFul.deliveryAccessToken
  });

  constructor() { }

  getPages(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: "page"
    }, query))
    .then(res => res.items);
  }
}

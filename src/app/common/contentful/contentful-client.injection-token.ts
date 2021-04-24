import { InjectionToken } from '@angular/core';
import { ContentfulClientApi } from 'contentful';

export const CONTENTFUL_CLIENT = new InjectionToken<ContentfulClientApi>(
  'app.contentful-client'
);
export const CONTENTFUL_OPS_CLIENT = new InjectionToken<ContentfulClientApi>(
  'app.contentful-ops-client'
);

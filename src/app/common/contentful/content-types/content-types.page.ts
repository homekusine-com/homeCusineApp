import { ContentfulEntry } from '../contentful.model';

export interface pageData {
  name: string;
  title: string;
  slug: string;
  seo: string;
  content: string;
}

export class Page {
  contentType = 'page';

  name: string;
  title: string;
  slug: string;
  seo: string;
  content: string;

  constructor(data: pageData) {
    this.name = data.name;
    this.title = data.title;
    this.slug = data.slug;
    this.seo = data.seo;
    this.content = data.content;
  }
}

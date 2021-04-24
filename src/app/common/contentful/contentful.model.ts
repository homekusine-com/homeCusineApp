export type CmsItem<TItem> = new (data: any) => TItem;

export interface ContentfulSystemData {
  id: string;
}

export interface ContentfulItem {
  sys: ContentfulSystemData;
}

export interface ContentfulEntrySystemData extends ContentfulSystemData {
  contentType: ContentfulItem;
}

export interface ContentfulAssetSystemData extends ContentfulSystemData {
  contentType: ContentfulItem;
}

export interface ContentfulEntry {
  sys: ContentfulEntrySystemData;
  fields: any;
}

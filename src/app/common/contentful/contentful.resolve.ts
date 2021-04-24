import { CmsItem, ContentfulEntry } from './contentful.model';
import { ContentfulService } from './contentful.service';

/** 
Resolve the corresponding CMS type for a Contentful entry.
@param entry The contentful entry.
@param allowedTypes A set of possible CMS types the entry may be,
*/
export function resolveCmsType<TItem>(
  ctor: CmsItem<TItem>,
  entry: ContentfulEntry
): TItem | null {
  if (!isContenfulEntry(entry)) return null;

  const data = entry.fields;

  return new ctor(data);
}

export function isContenfulEntry(
  data: ContentfulEntry | any
): data is ContentfulEntry {
  const asEntry = <ContentfulEntry>data;
  return (
    asEntry &&
    typeof asEntry.sys === 'object' &&
    typeof asEntry.fields === 'object'
  );
}

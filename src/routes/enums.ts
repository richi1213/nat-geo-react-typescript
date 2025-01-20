export enum DEFAULT_LAYOUT_PATHS {
  HOME = '/',
  WRITE_ARTICLE = 'write-article',
  CATEGORY = ':category',
  ARTICLE = 'article',
  ARTICLE_SLUG = ':articleSlug',
  SEARCH = 'search',
  SINGLE_ARTICLE = `${CATEGORY}/${ARTICLE}/${ARTICLE_SLUG}`,
  NOT_FOUND = '*',
}

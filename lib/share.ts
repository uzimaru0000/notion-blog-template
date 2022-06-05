export const twitter = (path: string, text: string) => {
  const url = new URL('/intent/tweet', 'https://twitter.com');
  const pageUrl = new URL(path, process.env.NEXT_PUBLIC_BLOG_ORIGIN);
  url.searchParams.set('url', pageUrl.href);
  url.searchParams.set(
    'text',
    `${text} - ${process.env.NEXT_PUBLIC_BLOG_TITLE ?? 'blog'}`
  );

  return url.href;
};

export const hatena = (path: string, text: string) => {
  const url = new URL(`/add`, 'https://b.hatena.ne.jp');
  url.searchParams.set('mode', 'confirm');
  url.searchParams.set('title', text);
  url.searchParams.set(
    'url',
    new URL(path, process.env.NEXT_PUBLIC_BLOG_ORIGIN).href
  );

  return url.href;
};

export const pocket = (path: string) => {
  const url = new URL(`/save`, 'https://getpocket.com');
  url.searchParams.set(
    'url',
    new URL(path, process.env.NEXT_PUBLIC_BLOG_ORIGIN).href
  );

  return url.href;
};

const ORIGIN = process.env.BLOG_ORIGIN;
const BASE = process.env.NEXT_PUBLIC_BLOG_OGP_ENDPOINT;

export const ogp = (title: string) => {
  if (!BASE) {
    return `${ORIGIN}/ogp.png`;
  }

  const url = new URL('/ogp', BASE);
  url.searchParams.set('title', title);

  return url.href;
};

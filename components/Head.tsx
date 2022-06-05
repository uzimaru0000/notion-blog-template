import NextHead from 'next/head';
import { ogp } from '../lib/ogp';

export const Head: React.VFC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <NextHead>
      <title>{process.env.NEXT_PUBLIC_BLOG_TITLE ?? 'blog'}</title>
      {process.env.NEXT_PUBLIC_BLOG_DESCRIPTION && (
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_BLOG_DESCRIPTION}
        />
      )}
      <link
        rel="icon"
        href={process.env.NEXT_PUBLIC_BLOG_FAVICON ?? '/favicon.ico'}
      />
      {children}
    </NextHead>
  );
};

const ORIGIN = process.env.BLOG_ORIGIN;
export const OGTag = ({
  url = ORIGIN,
  type = 'website',
  title,
  description,
}: {
  url?: string;
  type?: 'website' | 'article';
  title?: string;
  description?: string;
}) => {
  return (
    <NextHead>
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta
        property="og:title"
        content={title || (process.env.NEXT_PUBLIC_BLOG_TITLE ?? 'blog')}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_BLOG_TITLE ?? 'blog'}
      />
      <meta
        property="og:image"
        content={title ? ogp(title) : `${ORIGIN}/ogp.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
};

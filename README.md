## :book: notion-blog-template

Notion を CMS にしたブログのテンプレートです。

## Getting Started

いくつかの値を環境変数に設定することでカスタマイズできます。

```bash
# NotionのAPIを使うためのToken
NOTION_TOKEN=
# CMSとして使うNotionのDBのID
NOTION_DB_ID=
# GoogleAnalyticsのID（必須じゃないです）
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
# ブログのホスティング先のorigin（OGPのURLやシェアのURLを作るために利用されます）
NEXT_PUBLIC_BLOG_ORIGIN=
# ブログのタイトル
NEXT_PUBLIC_BLOG_TITLE=
# ブログのディスクリプション
NEXT_PUBLIC_BLOG_DESCRIPTION=
# ブログのファビコンに使うURL(設定しない場合は、 `public/favicon.ico` になります)
NEXT_PUBLIC_BLOG_FAVICON=
# OGPのエンドポイント(設定しない場合は、 `public/ogp.png` が利用されます)
NEXT_PUBLIC_BLOG_OGP_ENDPOINT=
```

ローカルで確認する際は、 `.env` に上記の値を記入します。
以下のコマンドで確認できます。

```bash
$ yarn
$ yarn dev
```

## Deploy on Vercel

`https://vercel.com/${user_id}/${project_id}/settings/environment-variables` で上記の値を設定します。

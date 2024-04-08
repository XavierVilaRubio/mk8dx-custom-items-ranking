# MK8DX Custom Items Ranking

A simple app for ranking custom items sets on MarioKart 8 Deluxe.

- Initialized and managed: [Create-Cloudflare CLI (C3)](https://developers.cloudflare.com/pages/get-started/c3/)
- Framework: [Nuxt](https://github.com/nuxt/nuxt)
- UI: [Shadcn-vue](https://github.com/radix-vue/shadcn-vue)
- DB: [Cloudflare D1](https://developers.cloudflare.com/d1/)
- Deployed on: [Cloudflare Pages](https://pages.cloudflare.com/)
- Runtime: [Bun](https://github.com/oven-sh/bun)

## Setup

Make sure to install the dependencies:
```bash
bun install
```
Crate a new D1 database:
```bash
bunx wrangler d1 create <d1-db-name>
```

Update your `wrangler.toml` D1 binding ([Cloudflare docs](https://developers.cloudflare.com/workers/wrangler/configuration/#d1-databases)).

Update the `worker-configuration.d.ts`:
```bash
bunx wrangler types
```

Setup your local d1:
```bash
bunx wrangler d1 execute <d1-db-name> --local --file ./server/schema.sql
```

Setup your remote d1 (for deploy):
```bash
bunx wrangler d1 execute <d1-db-name> --remote --file ./server/schema.sql
```

## Development

Start the development server on `http://localhost:3000`:
```bash
bun run dev
```

## Deploy

You have two deployment options with Cloudflare Pages:
- [Direct upload](https://developers.cloudflare.com/pages/get-started/direct-upload/): This will build your current project and upload it.
- [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/): Upload it to GitHub/GitLab and link it through the [Cloudflare Dashboard](https://dash.cloudflare.com).

I have used Direct upload, as it is the initial deploy when using C3.

**This only applies if you choose Direct upload**

Build and locally preview the production build:
```bash
bun run preview
```

Build and deploy production build:
```bash
bun run deploy
```

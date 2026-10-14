# UPGRADE HUMAN

Phone-only two-page site built with Next.js 14 (App Router) + your custom assets.

## Pages

| Route  | Content                                                        |
| ------ | -------------------------------------------------------------- |
| `/`    | Pixels video, asterisk + UPGRADE HUMAN headline → taps go to `/pray` |
| `/pray`| Skeleton video with the PRAY button (the only functional link) |

## Configure

- **PRAY button destination** → edit `lib/site.js` (`PRAY_URL`).
- **Remove page 1 → page 2 tap navigation** → in `app/page.jsx`, replace the
  `<Link href="/pray">` wrapper around `.center` with a plain `<div>`.

The top icons (Instagram / asterisk / menu) are decorative by design —
`pointer-events: none` — nothing to configure.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000 (use phone/emulator or narrow browser window)
```

## Push to GitHub

```bash
git init
git add .
git commit -m "UPGRADE HUMAN"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

> Videos live in `public/videos/` (6.6 MB + 9.9 MB — fine for Git).
> If you ever add a video over ~50 MB, host it externally instead.

## Deploy on Vercel

1. Push the repo to GitHub (above).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the repo.
3. Framework is auto-detected (Next.js) — no settings needed → **Deploy**.
4. Every future `git push` auto-redeploys.

## Asset map

| File                          | Used in                          |
| ----------------------------- | -------------------------------- |
| `public/videos/pixels.mp4`    | page 1 background                |
| `public/videos/skeleton.mp4`  | page 2 background                |
| `public/asterisk.png`         | top bar + center (page 1)        |
| `public/insta.png`, `menu.png`| top bars (both pages)            |
| `public/pray.png`             | PRAY button (page 2)             |
| `public/fonts/ObviouslyDemo-Bold.otf` | everywhere (headline)    |

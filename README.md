# 亞馬遜國家山岳協會 - 登山領隊訓練教材 第 21 章

登山隊伍管理與安全決策（Chapter 21）單頁靜態教材網站。

- 正式網址：`https://amazon-hike.com/chapter21/`
- 技術架構：Astro 靜態輸出（`output: 'static'`）、TypeScript、Tailwind CSS、零外部字型、零客戶端 JavaScript（除 `window.print()` 列印按鈕外）。
- 部署目標：Cloudflare Workers 靜態資源（Workers Static Assets）。

---

## 本地開發 (Local Development)

```bash
# 安裝依賴 (Node.js >= 20 < 25)
npm install

# 啟動本地開發伺服器
npm run dev
```

開發伺服器將在 `http://localhost:3000/chapter21/` 啟動。

---

## 建置 (Build)

```bash
npm run build
```

建置輸出目錄：
- `dist/chapter21/`：包含靜態 HTML、最佳化 WebP 圖片、CSS 樣式以及 `chapter21-sitemap-entries.xml`
- `dist/_headers`：自動轉換含有 `/chapter21` 前綴的靜態資產長快取與安全標頭規則

---

## 預覽 (Preview)

```bash
npm run preview
```

以本地 Wrangler 開發伺服器預覽建置成果。

---

## 部署至 Cloudflare Workers (Deployment)

```bash
npm run deploy
```

### Cloudflare 後台設定 (Cloudflare Dashboard Settings)
- **Framework Preset**: None / Astro
- **Build command**: `npm run build`
- **Deploy command**: `npx wrangler deploy`
- **Output directory**: `dist`
- **Custom Domain / Route**: `amazon-hike.com/chapter21/*`
- **Compatibility Date**: `2026-09-26`

---

## 注意事項與待替換資源
1. `src/assets/hero.jpg`：高山稜線上保持隊形前進的多人登山隊伍首圖。
2. `public/og.jpg`：1200×630 Open Graph 社群預覽圖（目前已產生符合規格的佔位圖）。
3. 日期設定：`src/data/content.ts` 中的 `datePublished`、`dateModified` 及 `scripts/generate-sitemap.mjs` 中的 `lastmod`。

以下の要件でNext.js 14（TypeScript + Tailwind CSS）のホームページを開発してください。

【要件】
コンセプト: ポップ
ページ構成: top・about・works・blog・contact
カラーイメージ: ダーク・スタイリッシュ
参考サイト: http://cocopocha.com|cocopocha.com>のホームページを作って

カレントディレクトリに Next.js 14 App Router プロジェクトを作成し、全ページコンポーネント・layout・globals.css を実装してください。

---
## 2026-04-15 00:02:14 (update)
Vercelデプロイ失敗の原因を探して修復して


---
## 2026-04-15 00:07:22 (update)
<http://cocopocha.com|cocopocha.com>のホームページのビルドエラーを修正してください。

エラー：フォントファイルが見つからない
• './fonts/GeistMonoVF.woff'
• './fonts/GeistVF.woff'
src/app/layout.tsxのフォント読み込みをローカルファイルから
next/fontのGoogle Fontsに変更してください。

import { Inter, Noto_Sans_JP } from 'next/font/google'

またはGeistフォントをnext/fontから読み込む形に変更して
ビルドが通るようにしてください。

修正後GitHubにpushしてVercelが自動再デプロイします。


---
## 2026-04-15 00:09:54 (update)
Vercelデプロイが失敗しています。原因を完全追求して


---
## 2026-04-15 00:11:44 (update)
Vercelデプロイ失敗


---
## 2026-04-15 00:13:54 (update)
├ chunks/fd9d1056-3eee857bde8f3b06.js  53.6 kB
  └ other shared chunks (total)          1.91 kB
○  (Static)  prerendered as static content
Error: No Output Directory named "public" found after the Build completed. Configure the Output Directory in your Project Settings. Alternatively, configure vercel.json#outputDirectory.
Learn More: <https://vercel.link/missing-public-directory|https://vercel.link/missing-public-directory>
Deployment Summary

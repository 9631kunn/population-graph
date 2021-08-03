## 納期

21/08/3

## 仕様

| chart      | API   | TEST | 状態管理 | スタイル         |
| ---------- | ----- | ---- | ------ | ---------------- |
| Highcharts | RESAS | JEST | Recoil | styled-components|

## テスト項目

- RESAS APIでの全都道府県データ取得
- RESAS APIでの都道府県別人口データ取得

## ディレクトリ構成

```
.
├── README.md
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── ogp.png
│   └── vercel.svg
├── src
│   ├── __tests__
│   │   ├── components
│   │   │   ├── Hello.test.tsx
│   │   │   └── __snapshots__
│   │   │       └── Hello.test.tsx.snap
│   │   └── lib
│   │       └── getData.test.ts
│   ├── atoms
│   │   ├── checkedPrefectures.ts
│   │   ├── loading.ts
│   │   └── prefecturePopulation.ts
│   ├── components
│   │   ├── Chart.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hello.tsx
│   │   ├── Layout.tsx
│   │   ├── Loading.tsx
│   │   ├── Logo.tsx
│   │   └── Prefectures.tsx
│   ├── images
│   │   ├── check.svg
│   │   └── logo-text.svg
│   ├── lib
│   │   └── getData.ts
│   ├── models
│   │   └── Api.ts
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles
│       ├── components
│       │   ├── chart.ts
│       │   ├── checkbox.ts
│       │   ├── container.ts
│       │   ├── footer.ts
│       │   ├── header.ts
│       │   ├── loading.ts
│       │   ├── logo.ts
│       │   └── prefectures.ts
│       └── themes
│           ├── globalStyles.ts
│           └── theme.ts
├── test
│   ├── setupTests.ts
│   └── tsconfig.jest.json
└── tsconfig.json
```

## 参考

\*RESAS API: https://opendata.resas-portal.go.jp/

\*RESAS API 仕様書: https://opendata.resas-portal.go.jp/docs/api/v1/index.html

\*Highcharts: https://www.highcharts.com/

\*Recharts.js: http://recharts.org/en-US/

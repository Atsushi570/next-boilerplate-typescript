This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## スタイリング

- パフォーマンスを考慮して CSS Modules を採用

  - クラス名を補完させるため scss にして[typed-scss-modules](https://github.com/skovy/typed-scss-modules)を利用する
    - 開発時に watch モードで動作させる
      - concurrently で next と typed-scss-modules を両方起動している
      - watch 対象は src 以下のファイル
    - scss と同じ階層に型定義ファイルが生成されるがので git 管理対象から外す
  - スタイリングは Tailwind を利用する

- コンポーネントライブラリの MUI を採用
  - プロジェクトにもよるができるだけコンポーネントの実装時間を減らしたいためコンポーネントライブラリを利用したい
  - コンポーネントライブラリの中では一番利用実績が多い
  - Tailwind を利用するため sx は利用しない
    - パフォーマンスの低下は[公式にあるデータ](https://mui.com/system/basics/#the-sx-prop)から無視できるレベルと判断
    - ただし、MUI のコンポーネントにしか利用出来ないためアプリケーション全体で利用できる Tailwind を優先する
- テーマカラーは src/styles/theme/colors を MUI と Tailwind の両方に適用して一元管理する
  - 命名はセマンティックにする
- font

## src へのエイリアス

- `@/`で src を指すよう設定した
  - `~/`は公式では例が記載されてなかったのでやめておいた

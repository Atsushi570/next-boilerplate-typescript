This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## スタイリング

- パフォーマンスを考慮して CSS Modules を採用
  - クラス名を補完させるため scss にして[typed-scss-modules](https://github.com/skovy/typed-scss-modules)を利用する
    - 開発時に watch モードで動作させる
      - concurrently で next と typed-scss-modules を両方起動している
      - watch 対象は src 以下のファイル
    - scss と同じ階層に型定義ファイルが生成されるがので git 管理対象から外す
- font

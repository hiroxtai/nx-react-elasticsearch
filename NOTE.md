# NOTE

## フォルダ構造

[bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) を参考に作成

```sh
src
├── assets            # 画像やフォントなどの静的ファイル
├── components        # アプリケーション全体で使用できる共通コンポーネント
├── config            # 環境変数などをエクスポートするところ
├── features          # 機能ベースモジュール
├── hooks             # アプリケーション全体で使用できる共通hooks
├── lib               # ライブラリをアプリケーション用に設定して再度エクスポートしたもの
├── providers         # アプリケーションのすべてのプロバイダー
├── routes            # ルーティングの設定
├── stores            # グローバルステートストア
├── test              # テストユーティリティとモックサーバ
├── types             # アプリケーション全体で使用される基本的な型の定義
└── utils             # 共通のユーティリティ関数
```

参考）

- [本気で考える React のベストプラクティス！bulletproof-react2022](https://zenn.dev/t_keshi/articles/bulletproof-react-2022)

## tsconfig.json

以下の設定を追加

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

これにより、`@` から始まるパスでインポートすることが可能となる。

```tsx
import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
```

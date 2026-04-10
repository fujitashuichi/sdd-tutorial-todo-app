SDD(Spec-Driven Development) を練習するためのToDoアプリです

## SDD とは
* Spec = Specification: 仕様
* Driven: ～で駆動している
* Development: 開発

繋げると、「仕様で駆動している開発」です。
AIに仕様書を渡して出力させたコードを人間がレビュー・修正して開発する手法のことをこう呼びます。

AIに正確に伝わるような仕様書作成を意図しており、人間向けの仕様書を元にした開発とは異なります。

このポートフォリオでは、人間用の要件（要件定義）とAI用の要件（Spec）を分けて使います。

* [要件定義](./docs/reqirements/)
* [specification](./docs/specs/app-spec.md)

## 技術スタック
### frontend: react-vite
軽量かつシンプルな react-vite 一択
その他のフレームワーク経験なし

### BE: Express
TSに統一したフルスタックとして妥当

**※ BEの二次案として EFCore**
**C#** はMicrosoftが関わっており、設計レベルでTSとの共通点が多く非常に扱いやすい。
EFCoreのマイグレーションによる抽象化されたコーディングはリレーショナルな処理に適しており、複雑なBEにも耐えやすい。

しかし、EFCoreを使用するほどの複雑なDBリレーションなどはなく、言語間の差異もあるため Express/TS を採用するのが妥当

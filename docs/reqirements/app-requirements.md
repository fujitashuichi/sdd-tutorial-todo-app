# Specification: SDD Tutorial Todo App

## 1. Project Overview
本プロジェクトは、Spec-Driven Development (SDD) 手法に基づき、人間が定義した厳密な仕様からAIが実装を行うチュートリアル用のToDoアプリケーションである。

## 2. Core Constraints (不変条件)
実装において、以下の論理的制約を厳守すること：
- **Unique IDs:** すべてのタスクは、システム内で一意の識別子（UUID等）を持つこと。
- **Immutable History:** 完了したタスクの「作成日時」は、後から変更不可であること。
- **No Empty Tasks:** タイトルが空、または空白文字のみのタスク追加を許容しないこと。

## 3. Domain Model (データ構造)
```typescript
interface Todo {
  id: string;          // UUID v4
  title: string;       // 1-100文字
  isCompleted: boolean; // 初期値: false
  createdAt: number;   // UNIXタイムスタンプ
}
```

## 4. Functional Requirements (機能要件)
### 4.1 タスク管理
- **Add:** タイトルを入力し、タスクを追加できる。
- **Toggle:** タスクの完了/未完了状態を切り替えられる。
- **Delete:** 特定のタスクを削除できる。
- **Clear:** 完了済みのタスクを一括削除できる。

### 4.2 フィルタリング
- **All:** すべてのタスクを表示。
- **Active:** 未完了のタスクのみ表示。
- **Completed:** 完了済みのタスクのみ表示。

## 5. Persistence (永続化仕様)
- ブラウザの `localStorage` を使用すること。
- キー名は `sdd_tutorial_todo_data` とし、ページリロード時に状態が復元されること。

## 6. UI/UX Interface (実装への指示)
- **Design:** シンプルかつモダンなUI。
- **Feedback:** タスク削除時には確認ダイアログを表示せず、直ちに実行すること。
- **Accessibility:** 各操作はキーボード（Enterでの追加等）で完結できること。

## 7. 技術スタック
[技術スタック一覧](./teckStack.md)

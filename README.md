# 学校ポータル PWA化 手順書

## 📁 ファイル構成

以下の4つのファイルを、同じフォルダに入れてください。

```
📁 portal/
  ├── index.html     ← メインのHTMLファイル（PWA設定済み）
  ├── manifest.json  ← アプリ名・アイコンの設定ファイル
  ├── sw.js          ← オフライン対応用ファイル
  └── icon.png       ← アプリアイコン画像（自分で用意）
```

---

## 🖼 icon.pngの用意の仕方

アイコン画像を自分で作る必要があります。

- **サイズ**: 512×512px 以上（正方形）
- **形式**: PNG
- **内容**: 学校のロゴや校章など

### 無料で作る方法
1. [Canva](https://www.canva.com/) にアクセス
2. 「カスタムサイズ」で 512×512px を選択
3. デザインして「PNG形式でダウンロード」
4. ファイル名を `icon.png` に変更

---

## 🌐 サーバーにアップロードする（GitHub Pages 無料）

### ① GitHubアカウントを作る
1. [github.com](https://github.com) にアクセス
2. 「Sign up」からアカウント登録（無料）

### ② 新しいリポジトリを作る
1. ログイン後、右上の「＋」→「New repository」
2. Repository name に `school-portal` と入力
3. 「Public」を選択
4. 「Create repository」をクリック

### ③ ファイルをアップロードする
1. 作ったリポジトリのページで「uploading an existing file」をクリック
2. 4つのファイルをすべてドラッグ＆ドロップ
3. 下の「Commit changes」をクリック

### ④ GitHub Pages を有効にする
1. リポジトリの「Settings」タブをクリック
2. 左メニューの「Pages」をクリック
3. 「Branch」で「main」を選択して「Save」
4. 数分後に以下のURLでアクセス可能になります：
   ```
   https://【あなたのGitHubユーザー名】.github.io/school-portal/
   ```

---

## 📱 スマホのホーム画面に追加する方法

### iPhoneの場合（Safari）
1. Safariで上記URLを開く
2. 下の共有ボタン（四角から上矢印）をタップ
3. 「ホーム画面に追加」をタップ
4. 名前を確認して「追加」をタップ

### Androidの場合（Chrome）
1. ChromeでURLを開く
2. 右上の「︙」メニューをタップ
3. 「ホーム画面に追加」をタップ
   （または画面下部にバナーが自動表示される場合あり）

---

## ✅ 確認ポイント

- [ ] 4つのファイルがすべて同じフォルダにある
- [ ] URLが `https://` から始まっている（`file://` では動きません）
- [ ] icon.png が用意できている
- [ ] スマホのホーム画面からアイコンで起動できる

---

## 🔧 カスタマイズ

### アプリ名を変えたい
`manifest.json` の `"name"` と `"short_name"` を編集してください。

### テーマカラーを変えたい
`manifest.json` の `"theme_color"` と `"background_color"` を変更してください。

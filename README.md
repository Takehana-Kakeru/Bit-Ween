
# 更新手順（GitHub Pages）

1. `git add .`
2. `git commit -m "Update Bit-ween"`
3. `git push`
4. GitHubのActionsでPagesのデプロイ完了を待つ
5. https://takehana-kakeru.github.io/Bit-Ween/ を開く
6. 反映されない場合は `Ctrl + F5`（強制更新）

# v0.11 に戻す（git）

1. `git status`（変更がある場合は先にコミット or `git stash`）
2. `git log --oneline --decorate -n 50`
3. `git log --oneline --grep "v0.11"`（見つかった行の先頭SHAを控える）
4. **安全（履歴を残す）**: `git revert <SHA>..HEAD` → 競合が出たら解決して `git revert --continue` → `git push`
5. **強制（履歴を書き換える）**: `git reset --hard <SHA>` → `git push --force-with-lease`
6. GitHub Pages反映はActions完了待ち → 反映されない場合は `Ctrl + F5`


## Goal
Rename the GitHub repository to `puzzleco-landing-page` without breaking the Lovable ↔ GitHub sync or the live Pages site.

## Will the connection survive?
Yes. Lovable links the repo by its GitHub repository ID, not its name, and GitHub keeps a redirect from the old URL. The two-way sync keeps working after the rename. Only a local clone needs `git remote set-url` updated.

## What you do (GitHub side — I can't do this from here)
1. GitHub → repo → **Settings → General → Repository name** → enter `puzzleco-landing-page` → **Rename**.
2. Make one small change in Lovable afterwards and confirm the commit lands in the renamed repo. If sync ever hiccups, reconnect via chat "+" menu → GitHub.
3. Pages settings (Source: branch `main`, folder `/docs`) are preserved — nothing to re-set.

## What I do (site side)
- Check `docs/CNAME`: if a custom domain is configured there, the live URL is unaffected. If not, the Pages URL becomes `https://<user>.github.io/puzzleco-landing-page/`.
- Scan `docs/` and `public/site/` for any absolute links pointing at the old repo or old github.io path and make them relative so the site works under the new subpath.
- Keep `public/site/` and `docs/` in sync after any edit.

## Notes
- Current assets already use relative paths, so no visual breakage is expected.
- This is separate from the Lovable project name (top-left → Rename project) — say the word if you want that matched too.

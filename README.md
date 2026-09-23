# Aida's site

Plain HTML/CSS/JS, no build step. Flow:

`index.html` → `quotes.html` → `who-am-i.html` → `work.html` → `analytical.html` or `creative.html`

The first three pages advance on a click anywhere (see `nav.js`, driven by `<body data-next>`). On `work.html` only the two squares are clickable.

## Deploy on GitHub Pages

1. Put the contents of this folder at the root of a repo (or keep it in a `docs/` folder).
2. Repo Settings → Pages → Deploy from a branch → pick the branch and folder.

All paths are relative, so it also works under `username.github.io/repo-name/`.

## Fonts

| Font | Used for | Source |
|---|---|---|
| Architects Daughter | everything by default | Google Fonts |
| Knewave | "Who am I?" | Google Fonts |
| Behind The Nineties Sans | quotes and book names | `fonts/` (free for personal use only, per Casloop Studio) |
| Kavivanar | Tamil | `fonts/` |
| HanyiSentyTang | Chinese | `fonts/`, subset |

The Chinese font is 12 MB, so `fonts/hanyi-senty-tang-subset.woff2` only holds the characters on the landing page and the Wang Zhihuan quote. If you add or change Chinese text, regenerate it with every character you use:

```bash
pyftsubset HanyiSentyTang.ttf --text="你好我叫康雨琦白日依山尽黄河入海流欲穷千里目更上一层楼王之涣登鹳雀，。\"" --flavor=woff2 --output-file=fonts/hanyi-senty-tang-subset.woff2
```

(`pip install fonttools brotli` first.) Any character missing from the subset falls back to a system font.

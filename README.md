# Learning in motion

A public, one-page development journal for a homeschool learning project.

**Website:** https://chkp-shacharsh.github.io/homeschool-learning-journey/

The site presents a manually curated snapshot dated 24 October 2026. It includes an animated vector illustration, an interactive milestone journal, a small subtraction explanation, a synthetic screenshot of the local learning app, and an evidence-based roadmap.

## Local preview

Serve this directory with any static web server, for example:

```sh
python -m http.server 4318 --bind 127.0.0.1
```

Open `http://127.0.0.1:4318/`. No build step or package installation is needed.

## Publishing

GitHub Pages serves the root of the `main` branch. `.nojekyll` keeps this a plain static site. All site asset paths are relative, so the repository subpath works as well as local preview.

## Updating the journal

Update `index.html`, the milestone entries in `script.js`, and `PROGRESS.md` together. Change the snapshot date only after reviewing new evidence. Keep planned work, implemented software, recorded software checks, and observed learning outcomes distinct. The page does not automatically read the private project or gather learner results.

Publish only this dedicated site directory. Do not copy family profiles, learning records, application state, raw planning notes, or private source documents into this repository. The screenshot in `assets/workshop-preview.png` comes from an isolated synthetic software-test session.

## Design and accessibility

Responsive layouts, semantic landmarks, a skip link, keyboard-operable controls, text equivalents for the bead explanation, and a motion pause/resume control are included. The page respects the operating system’s reduced-motion preference. Fonts are loaded from Google Fonts (DM Sans and Instrument Serif), with system fallbacks. There are no analytics, cookies, accounts, or application data APIs on this page.

See [the development notes](PROGRESS.md) for milestones and the scope of the recorded checks.

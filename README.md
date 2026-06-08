# Jay Prakash — Portfolio

A clean, responsive, single-page portfolio with a **Products** section. Built with plain
HTML, CSS, and a little JavaScript — no build step, no dependencies. Free to host on
GitHub Pages.

## Structure

```
portfolio/
├── index.html                          # Home: hero, products, about, contact
├── styles.css                          # All styling (dark theme)
├── script.js                           # Nav toggle + Store-button activation
├── assets/
│   └── app-mockup.svg                  # App preview image
└── products/
    └── always-on-top-tasks.html        # Dedicated product page (share this URL)
```

## Edit before publishing

Search-and-replace these placeholders with your real details:

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `your-email@example.com` | `index.html` | Your email |
| `linkedin.com/in/your-handle` | `index.html` | Your LinkedIn |
| `twitter.com/your-handle` | `index.html` | Your X/Twitter |
| About paragraph | `index.html` | Your real bio |
| `REPLACE_WITH_MICROSOFT_STORE_URL` | `products/always-on-top-tasks.html` | Your Store listing URL |

### Going live on the Microsoft Store
When your app is published, open `products/always-on-top-tasks.html` and set:

```html
data-store-url="https://apps.microsoft.com/detail/XXXXXXXXXXXX"
```

The "Get it from Microsoft Store" button activates automatically and the status badge
flips from **Coming soon** to **Available**. Share the product page URL anywhere.

## Run locally

```powershell
# Any static server works, e.g.:
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages

1. Push this folder to a repo (e.g. `iam-jay/portfolio` or `iam-jay.github.io`).
2. Repo **Settings → Pages → Source: Deploy from a branch → main → / (root)**.
3. Your site goes live at `https://iam-jay.github.io/portfolio/` (or `https://iam-jay.github.io/`).

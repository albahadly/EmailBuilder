# EmailBuilder

EmailBuilder is a single-page visual editor for building email bodies and exporting table-based HTML that works across major email clients.

## Live URL

- [https://albahadly.github.io/EmailBuilder](https://albahadly.github.io/EmailBuilder)

## What This Project Does

- Builds marketing and transactional email layouts with reusable content blocks.
- Lets you edit text, spacing, colors, typography, links, and alignment from the UI.
- Exports clean email HTML for sending through ESPs.
- Supports loading and saving JSON so email drafts can be versioned and reused.
- Includes checks to help catch common email-client compatibility issues.

## Main File

- [index.html](index.html): complete app (UI, state, editor logic, serializer, and export modal).

## Run Locally

1. Clone this repository.
2. Open [index.html](index.html) in your browser.
3. Build your email with blocks and use Export HTML when ready.

No build step or package install is required.

## Deployment

This repository is configured for GitHub Pages deployment from the `main` branch using a GitHub Actions workflow.
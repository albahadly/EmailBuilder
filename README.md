# EmailBuilder

EmailBuilder is a single-page visual editor for building email bodies and exporting table-based HTML that works across major email clients.

Current version: v1.3

## Live URL

- [https://albahadly.github.io/EmailBuilder](https://albahadly.github.io/EmailBuilder)

## What This Project Does

- Builds marketing and transactional email layouts with reusable content blocks.
- Lets you edit text, spacing, colors, typography, links, and alignment from the UI.
- Exports clean email HTML for sending through ESPs.
- Exports both HTML and plain-text versions of the email content.
- Supports loading and saving JSON so email drafts can be versioned and reused.
- Validates and migrates legacy JSON drafts with schema-aware restore rules.
- Autosaves drafts in the browser and offers restore on next load.
- Supports full custom-template management: save, load, rename, delete, import, and export.
- Applies safety checks and sanitization to raw HTML blocks and imported state payloads.
- Adds a critical issue confirmation gate before export/download.
- Includes checks to help catch common email-client compatibility issues.

## Starter Templates

The Start from dropdown includes ready-made starters:

- Product update
- Plain announcement
- Transactional receipt
- Newsletter digest
- Welcome email
- Event invitation
- Abandoned cart reminder
- Onboarding checklist
- Webinar follow-up
- Seasonal promotion
- Customer feedback request
- Win-back campaign
- Blank

## Main File

- [index.html](index.html): complete app (UI, state, editor logic, serializer, and export modal).

## Run Locally

1. Clone this repository.
2. Open [index.html](index.html) in your browser.
3. Build your email with blocks and use Export to get HTML or plain text output.

No build step or package install is required.

## Smoke Tests

Run lightweight browser tests from:

- [tests/smoke-tests.html](tests/smoke-tests.html)

The smoke suite validates HTML serialization, plain-text export, critical checks, and legacy draft migration.

## Deployment

This repository is configured for GitHub Pages deployment from the `main` branch using a GitHub Actions workflow.
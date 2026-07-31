# EmailBuilder

EmailBuilder is a single-page visual editor for building email bodies and exporting table-based HTML that works across major email clients.

Current version: v1.7

## Live URL

- [https://albahadly.github.io/emailbuilder](https://albahadly.github.io/emailbuilder)

## What This Project Does

- Builds marketing and transactional email layouts with reusable content blocks.
- Lets you edit text, spacing, colors, typography, links, and alignment from the UI.
- Exports clean email HTML for sending through ESPs.
- Exports both HTML and plain-text versions of the email content.
- Preserves link destinations in plain-text export as readable text (label + URL).
- Supports loading and saving JSON so email drafts can be versioned and reused.
- Validates and migrates legacy JSON drafts with schema-aware restore rules.
- Autosaves drafts in the browser and offers restore on next load.
- Adds compatibility profiles (Mainstream/Broad/Legacy) with profile-aware pre-send warnings.
- Supports optional safe reset CSS in full-document export for Apple/Gmail/Outlook quirks.
- Adds bgcolor fallback attributes in exported wrappers for stronger legacy client rendering.
- Supports full custom-template management: save, load, rename, delete, import, and export.
- Applies safety checks and sanitization to raw HTML blocks and imported state payloads.
- Uses in-app dialogs for confirmations and naming flows instead of browser prompt/confirm popups.
- Adds a critical issue confirmation gate before export/download.
- Includes checks to help catch common email-client compatibility issues.

## Output Guarantees

- Rich text is rebuilt into an allowlisted tree, so no pasted attribute, event
  handler or stray table markup reaches the export.
- Link URLs are restricted to `http`, `https`, `mailto`, `tel` and `sms`.
  Schemeless values — relative paths and ESP merge tags — pass through untouched.
- Every table carries `border-collapse` and `mso-table-lspace/rspace` inline, so
  body-only export renders correctly in Outlook without a stylesheet.
- Full-document export sets `lang`, both text-size-adjust prefixes, and dark-mode
  overrides for `prefers-color-scheme` and Outlook.com's `data-ogsc`/`data-ogsb`.
- Data tables are padded to a full grid so short rows cannot break row borders.

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

Serve the repository over HTTP rather than opening the file directly — Chrome and
Edge treat two `file://` documents as different origins, so the suite cannot reach
into the app frame and every test fails to start:

```
npx serve .        # then open http://localhost:3000/tests/smoke-tests.html
```

The smoke suite validates HTML serialization, plain-text export, critical checks,
legacy draft migration, sanitizer hardening, inline Outlook table resets,
dark-mode output, unsubscribe detection and saved-template isolation.

## Deployment

This repository is configured for GitHub Pages deployment from the `main` branch using a GitHub Actions workflow.

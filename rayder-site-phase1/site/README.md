# RAYDER — site source

Custom build for Brook's creator site "Rayder" (future branding: Rayder.net).
Full plan: `../files/creator-site-plan.md`. Read it before changing anything —
brand rules, tiers, page names, and the SSN boundary are all settled there.

## Status

- **Phase 1 (public site): BUILT 2026-10-23.** Static pages in `public/`:
  HQ (`index.html`), The Rayder File, Transmissions, Signals, Join the Raid
  (tier cards display-only, buttons wake up in Phase 3), Intel, Comms.
- **Phase 2 (accounts + admin): not started.** Login routing rule: active sub →
  Inner Circle; no sub → HQ.
- **Phase 3 (PayPal subscriptions): not started.** Sandbox first. Brook's real
  PayPal account is Personal and is NOT touched or upgraded during the build.
- **Phase 4 (launch): deferred until Brook says it's time.** The finished site
  gets set aside until then. No live deployment without her explicit go.

## Preview locally

Any static server works for Phase 1, e.g. from `site/`:

    python3 -m http.server 8000 --directory public

then open http://localhost:8000 — or open `public/index.html` directly.
With Wrangler (also exercises the Worker stub): `npx wrangler dev`.

## Hard rules (from the plan)

- Brook's SSN never appears in this code, repo, database, or any config. Ever.
- Payments are PayPal ONLY. No Stripe, no Square, no Cash App rail.
- Page names are Brook's approved creative set — don't rename casually.
- Nightmarian Artizan stays a separate identity; nothing of hers merges in here.

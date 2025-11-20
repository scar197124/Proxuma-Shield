# Proxuma Shield L9000

This is an **all‑in‑one evolution build** of Proxuma Shield that keeps the original look and layout, but layers in more intelligence and tooling.

## What’s new (compared to L816.4)

- ✅ Upgraded **URL Analyzer**
  - Pattern tags (long URL, login-related, marketing redirect, etc.)
  - Local “reputation snapshot” (hostname, domain, TLD, trusted brand check)
  - Softer handling of **marketing / QR shortener domains** like `aug.me`, `bit.ly`, `t.co`
  - Still fully local – no server calls

- ✅ **Safe‑open preview**
  - Shows the full normalized URL in a dedicated box
  - Proxuma never auto-opens links – the user stays in control

- ✅ Local **URL history**
  - Stores the last few scans in `localStorage`
  - Displayed at the bottom of the URL panel
  - Local to the device; clearing browser data resets it

- ✅ Embedded **Proxuma Assistant**
  - Simple Q&A box tied to the last URL scan
  - Answers questions like “Why is this caution?” or “Is this safe to open?”
  - Fully local rule‑based logic – no network or backend

- ✅ Enhanced **QR panel**
  - File upload (as before)
  - New “Start Live Camera Preview (Beta)” button using `getUserMedia`
  - Live camera stream for future QR decoding (you can wire it to a JS decoder library)
  - Clear messaging that product packaging QR codes often use tracking redirects

- ✅ Message Analyzer upgrades
  - Detects themes: urgency, threat, prize/reward, financial, secrecy, links, codes/credentials
  - Displays these as tags below the result

- ✅ Caller Check
  - Same pattern logic, refined wording
  - Keeps UI exactly the same

## How to run

1. Open `index.html` in any modern browser.
2. Use the four tiles:
   - URL Analyzer
   - QR Scanner
   - Email / Message
   - Caller Check
3. Everything runs client‑side in the browser — there is no backend.

## GitHub / Pages

- Create a repo (e.g. `proxuma-shield-l9000`).
- Add:
  - `index.html`
  - `README.md`
  - `LICENSE` (MIT)
- Enable GitHub Pages with the root folder.

This gives you a single‑file, all‑in‑one Proxuma Shield demo that looks like the original but behaves like a more complete toolkit.

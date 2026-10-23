<div align="center">

<img src="assets/icon128.png" width="96" alt="WhatsApp Work Tracker logo">

# WhatsApp Work Tracker

**Your WhatsApp is full of work. This turns it into a to-do list, automatically.**

A Chrome extension that reads your work messages on WhatsApp Web and turns them into
**tasks, follow-ups, payments and reminders**, with due dates and company tags.
No server, no subscription, no AI bills. **100% offline.**

[**▶ v2 live demo**](https://marufxdd.github.io/whatsapp-work-tracker/v2/) · [▶ v1 live demo](https://marufxdd.github.io/whatsapp-work-tracker/) · [⭐ Star to get notified](#-full-release-coming-soon)

![Status](https://img.shields.io/badge/status-v2.0%20private%20beta-orange)
![Chrome](https://img.shields.io/badge/Chrome-Extension%20MV3-4285F4?logo=googlechrome&logoColor=white)
![Offline](https://img.shields.io/badge/works-offline-16a34a)
![Tests](https://img.shields.io/badge/tests-279%20passing-brightgreen)
![Platforms](https://img.shields.io/badge/Windows%20%7C%20macOS%20%7C%20Linux-supported-555)

</div>

---

## 🆕 v2: reads every chat, no need to open them

<p align="center"><img src="assets/v2/logo.png" width="72" alt="Work Tracker v2 logo"></p>

**[▶ Try the v2 live demo](https://marufxdd.github.io/whatsapp-work-tracker/v2/)**

![v2 demo: messages in unopened chats become to-dos](assets/v2/screenshots/demo-light.png)

- 📡 **Every chat, unopened.** New messages are caught in the background, even in chats you never opened.
- ⚡ **Instant catch-up.** On first start it reads the last few days of every chat, then each new message live.
- 🍎 **macOS-style design.** Traffic lights, translucent glass and a segmented toolbar. To-do looks like Reminders, Messages like the Messages app.
- 🌓 **Light / Dark mode** and 4 text sizes.
- 🔔 **Smarter follow-ups:** They replied · Waiting on them · They will send · I promised.
- 🔒 **Strictly read-only.** It never sends, never opens a chat and never marks messages as read (no blue ticks). Tracking is blocked.
- 💻 **Works on Windows, macOS and Linux.** The macOS look is just the design. It runs anywhere Google Chrome runs.

| To-do (dark) | Follow-ups | Messages | Settings |
|---|---|---|---|
| ![To-do dark](assets/v2/screenshots/todo-dark.png) | ![Follow-ups](assets/v2/screenshots/fu.png) | ![Messages](assets/v2/screenshots/chat.png) | ![Settings](assets/v2/screenshots/set.png) |

### v1 vs v2

| | v1 | v2 |
|---|---|---|
| Reads | Only the chat open on screen | **All recent chats, without opening them** |
| New messages in other chats | Caught when you open that chat | **Caught instantly** |
| Design | Clean, simple panel | **macOS-style, Light/Dark, text sizes** |
| Follow-up groups | 2 | **4** (incl. “They replied” and “I promised”) |
| Platforms | Windows · macOS · Linux (Chrome) | Windows · macOS · Linux (Chrome) |
| Automated tests | 161 | 118 |

---

## v1: the original

[▶ Try the v1 live demo](https://marufxdd.github.io/whatsapp-work-tracker/)

![Demo: WhatsApp messages on the left turn into tasks on the right](assets/screenshots/demo-inbox.png)

<sub>Screenshots are from the live demo. All chats, names, companies and numbers are made-up sample data.</sub>

### 😩 The problem

If you run a business, manage accounts or handle clients in India, a lot of real work happens on WhatsApp:

> *“Sir GST invoice kal tak bhej dijiye”* · *“Payment ₹45,000 done, UTR 4029…”* · *“Audit report 20 tak finalize karna hai”*

These messages get buried under “Good morning 🌞” forwards. Deadlines slip, payments go unconfirmed and follow-ups are forgotten.

### ✨ The solution

Keep WhatsApp Web open and read your chats as usual. **Work Tracker** works quietly in the side panel:

| | Feature | What it does |
|---|---|---|
| 📥 | **Smart Inbox** | Detects work messages automatically and lets you sort each one in a single tap: Task, Follow-up, Details or Not work |
| 📅 | **Understands Hinglish dates** | Turns “kal tak”, “20 tak”, “Monday ko” and “EOD” into real due dates, counted from the day the message was sent |
| 🔔 | **Follow-ups both ways** | Tracks what others owe you and what you owe them. Includes reminders, snooze and auto-detection when the reply arrives |
| 🗂️ | **Details vault** | Pulls GSTIN, PAN, IFSC, bank details, UTR, amounts and documents into one searchable place, with click-to-copy |
| 🏢 | **Multi-company tags** | Handles several businesses and tags every task to the right one |
| 🧾 | **Compliance calendar** | Shows GST, TDS, ITR and ROC due dates right next to your tasks |
| 📊 | **Daily Sweep + Report** | Checks every chat active today, read or unread, so nothing slips through |
| 📤 | **Export** | Excel (multi-sheet), CSV and JSON backup/restore |
| 🔒 | **Private by design** | Read-only: it never sends or clicks on its own. OTPs are never stored, passwords are redacted and Aadhaar is masked. No cloud. |

### 📸 Screenshots

| Tasks | Follow-ups | Schedule |
|---|---|---|
| ![Tasks](assets/screenshots/tasks.png) | ![Follow-ups](assets/screenshots/followups.png) | ![Schedule](assets/screenshots/schedule.png) |

| Why was it detected? | Details vault | Daily report |
|---|---|---|
| ![Why detected](assets/screenshots/inbox-why.png) | ![Details](assets/screenshots/details.png) | ![Report](assets/screenshots/report.png) |

### 🎮 Try it yourself

Open the **[live demo](https://marufxdd.github.io/whatsapp-work-tracker/)** and type a message in the simulated WhatsApp chat. Some to try:

- `Sir TDS return 15 tak file karna hai`
- `Payment ₹12,500 received`
- `Good night` (watch it get ignored 😉)

> The demo runs in your browser with sample data and a simplified matcher made just for this page.
> The real extension uses a much more complete, fully tested detection engine.

## 🛠️ Built with

- Chrome Extension **Manifest V3** (service worker + side panel)
- Plain **JavaScript**, with no framework and no build step
- **IndexedDB** (Dexie) for local storage and **SheetJS** for Excel export
- Rules-based detection engine for **Hinglish + English + Hindi**, covered by **279 automated tests** (v1 + v2)

## 🗺️ Roadmap

- [x] Message reader, detection engine and Smart Inbox
- [x] Tasks, follow-ups, reminders and daily digest
- [x] Schedule + compliance calendar
- [x] Details vault, company tags and Excel/CSV export
- [x] Daily Sweep + Daily Report
- [x] v2: reads all chats in the background, macOS-style design, dark mode
- [ ] Public release of the source code
- [ ] Optional AI mode (bring your own API key)
- [ ] Invoice photo OCR
- [ ] Google Calendar export

## 🚀 Full release coming soon

The extension works and is in private use. **The full source code will be published here soon.**

- ⭐ **Star this repo** to get notified when it drops
- 👀 **Watch → Custom → Releases** to get an alert
- 💬 Open an [issue](https://github.com/Marufxdd/whatsapp-work-tracker/issues) to tell me what you'd use it for, or to ask for early access

---

<sub>Not affiliated with, endorsed by or connected to WhatsApp or Meta. “WhatsApp” is a trademark of its owner.
© 2026 Marufxdd. All rights reserved.</sub>

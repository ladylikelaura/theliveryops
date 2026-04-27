# Theliverops — Landing Page Build Prompt

Build a landing page for **Theliverops** — an AI automation and UX design studio that connects the broken gaps in small courier and delivery companies' operations. The target audience is owner-operators of 1–20 van courier companies, last-mile delivery startups, and dispatch-heavy logistics SMBs in the UK and US who are drowning in WhatsApp, spreadsheets, and manual everything.

Treat this as a premium editorial marketing site, not a generic SaaS landing page. The soul of the design is **bold, clean editorial confidence** paired with **painterly warmth** and **a single vivid accent color used sparingly but memorably.**

---

## Tech stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- **GSAP** with **ScrollTrigger** and **SplitText** plugins for scroll animations
- **Lenis** for smooth scrolling
- Framer Motion for micro-interactions
- Single-file artifact is fine; if not possible, organise cleanly

---

## Brand system (non-negotiable)

**Colors:**
```css
--primary: #FF4000;       /* vivid orange — accent only, never background */
--accent: #0A0A0A;        /* near-black — editorial weight */
--background: #F8F6F1;    /* warm cream — dominant canvas, feels like paper */
--text: #0A0A0A;          /* near-black body text */
--muted: #6B6860;         /* muted brown-gray for secondary text */
--surface: #EEEAE1;       /* slightly darker cream for card backgrounds */
```

**Typography:**
- Headings: **Bricolage Grotesque** (500–700 weight, tight letter-spacing -0.02em on display sizes)
- Body: **Geist** (400 regular, 500 medium)
- H1: 58px, H2: 44px, H3: 28px, body: 15px
- Tight line-height on display (0.95–1.0), relaxed on body (1.6)
- Key phrases in headings get an **orange underline** — a drawn SVG underline beneath the text, NOT a highlight, NOT a color change

**Spacing & shape:**
- Base unit: 4px (all spacing in multiples of 4)
- Border radius: 5px throughout — soft but not pillowy
- Sections breathe with 120–160px vertical padding on desktop
- Cards and panels use subtle 1px borders in a warm mid-tone

**Tone:** Operator-native. Direct. Like someone who's worked in a warehouse, not a marketing team. No jargon. No "synergy." Short punchy sentences. One idea per line. We speak to the dispatcher who's answering 40 WhatsApp messages a day and the owner who hasn't had a proper Friday off in years.

---

## Illustration direction

Visual identity rests on **hand-drawn, painterly flat-vector illustrations** — warm editorial style. Think: New Yorker meets modern logistics. Real courier characters with real faces, warm ochre and rust tones, loose confident line work, visible painterly quality.

Use **placeholder `<img>` tags** with descriptive alt text and sensible dimensions. Pad them with soft gradient backgrounds (peach → cream → pale amber) so the page feels warm and alive without real art. Mark each with a comment:

```
<!-- ILLUSTRATION: painterly editorial portrait of a UK courier owner reviewing a mobile phone at a depot, warm morning light, ochre tones -->
```

---

## Page structure (12 sections)

---

### 1. Navigation

Minimal sticky top bar. Cream background, 1px warm border bottom.

- **Left:** "Theliverops" wordmark in Bricolage Grotesque 600 weight + small orange circle logo
- **Center:** 4 links — How It Works, What We Fix, Pricing, About
- **Right:** "Book a Free Audit" button — black fill, white text, 5px radius, 500 weight

---

### 2. Hero (full viewport)

Asymmetric 3-column layout, cream background, generous padding.

**Left column (50% width):**
Massive H1 in Bricolage Grotesque, stacked across 3 lines. Each word in its own span for scroll-reveal.

```
"Your Courier Ops
Run on WhatsApp
and Good Intentions."
```

The word "WhatsApp" gets the orange underline treatment.

**Middle:** Painted hero illustration placeholder — a courier dispatcher character, tablet in hand, warm editorial style. Bleeds from center into right column.
```
<!-- ILLUSTRATION: painterly editorial portrait of a male UK courier dispatcher at a depot desk, reviewing a tablet, warm amber tones, confident loose line work -->
```

**Right column (25%, thin rail):**
- Small italic orange eyebrow: *"You're losing £500–1,500/month to steps a machine could do —"*
- Orange-underlined key phrase: *"We fix that in 2 weeks."*
- 2-line body: "Theliverops builds AI automation and clean UX for small courier companies. You keep running deliveries. We make everything else run itself."
- Stacked CTA button:
  - Top label (bold): "Get My Free Ops Audit"
  - Bottom label (smaller, muted): "See exactly where you're losing money"

Below the illustration: full-bleed orange geometric shape — flat vivid orange trapezoid spanning full width, partially behind the character, bleeding off the bottom edge of the hero.

---

### 3. "Meet Theliverops" anchor moment

Full viewport. Three stacked lines of huge type, each word in its own span, staggered scroll-reveal:

- Line 1: "Meet Theliverops."
- Line 2 (larger): "Your Ops Running Itself,"
- Line 3: "From Day One."

Words animate left-to-right with 60ms stagger. Background: subtle warm painterly gradient placeholder.
```
<!-- BACKGROUND: soft painterly warm gradient, cream to pale amber, visible texture, impressionist quality -->
```

---

### 4. The Problem Section — "What's Actually Broken"

Full-bleed block. Left-aligned paragraph above the heading:

*"We've mapped the manual workflow of 50+ courier companies. The same 8 problems come up every time."*

Heading reads:
**"Every pound your team earns, something leaks it right back out:"**
— with *"leaks it right back out"* getting the orange underline.

Below: **horizontal strip of 8 pain-point pills** — each one a rounded tag in warm surface color with a short label:

```
"40 daily WhatsApp queries"  |  "Invoices sent late or wrong"
"Lost POD photos"            |  "Failed deliveries uncharged"
"Driver pay disputed weekly" |  "No-show quotes losing jobs"
"Zero repeat booking nudges" |  "Owner can't see the numbers"
```

Soft grayscale / muted treatment. Each pill reveals on scroll with a stagger.

---

### 5. Horizontal-scroll pinned carousel — THE showpiece

This is the defining interaction. Pin the section. As the user scrolls vertically, 5 cards slide horizontally through the viewport.

**Card structure:**
- Counter top-left: "1/5", "2/5", etc.
- Pill label top-right
- Large H2 with one orange-underlined phrase
- Video/illustration placeholder
- Two feature rows: bold label + muted 1-line description

**The 5 cards:**

**Card 1 — "Customer Comms"**
Heading: *"No more answering 'Where's my parcel?' — ever again."*
Underline: *"ever again"*
Video: `<!-- VIDEO: 8-sec loop showing WhatsApp bot replying to tracking query instantly -->`
Feature rows:
- **AI status bot** — Customer texts order number, gets a human-sounding reply in seconds
- **Pre-delivery alerts** — 1 hour before arrival, customer gets a heads-up automatically

**Card 2 — "Billing & Invoicing"**
Heading: *"Invoice goes out the moment the job is done."*
Underline: *"the moment"*
Video: `<!-- VIDEO: 8-sec loop of invoice generating automatically from a completed delivery -->`
Feature rows:
- **Auto-invoice generation** — Pulls order data, fills template, sends to client. Zero admin.
- **Payment chase sequences** — Day 7, 14, 21 reminders sent automatically without you touching anything

**Card 3 — "Driver Management"**
Heading: *"Friday pay runs that take zero minutes."*
Underline: *"zero minutes"*
Video: `<!-- VIDEO: 8-sec loop of driver payslip WhatsApp message sending automatically -->`
Feature rows:
- **Automated pay calculator** — Deliveries counted, rate applied, payslip sent every Friday at 5pm
- **Receipt scanning** — Driver photos a fuel receipt. Claude reads it. Xero logs it. Done.

**Card 4 — "Failed Deliveries"**
Heading: *"Turn every failed drop into recovered revenue."*
Underline: *"recovered revenue"*
Video: `<!-- VIDEO: 8-sec loop showing failed delivery fee invoice generating automatically -->`
Feature rows:
- **Pre-delivery confirmation** — 1hr before drop: "Can you confirm you'll be in?" Failures drop 40%
- **Re-delivery fee automation** — Nobody home? Re-delivery invoice raised automatically. No more absorbing the cost.

**Card 5 — "Business Intelligence"**
Heading: *"Monday morning. Owner already knows the numbers."*
Underline: *"already knows"*
Video: `<!-- VIDEO: 8-sec loop of weekly performance summary arriving in owner's WhatsApp -->`
Feature rows:
- **Weekly ops summary** — Revenue, on-time rate, best driver, busiest zone. Sent every Monday 8am.
- **Route profitability view** — See which zones actually make money after fuel. Know where to grow.

Use GSAP ScrollTrigger with `pin: true` and `scrub: 1`. Horizontal translate tied to scroll progress.

---

### 6. Pain vs. Theliverops comparison grid

Six rows, three columns:

- Col 1: **Problem pill** (muted warm surface)
- Col 2: **"Today"** (muted gray) — the painful status quo in 2 lines
- Col 3: **"With Theliverops"** (orange header) — the automated version in 2 lines

```
| Customer tracking queries  | Dispatcher answers 30–40 WhatsApp messages per day | Bot handles every query instantly. Dispatcher does real work. |
| Monthly client invoicing   | Compiled manually, sent late, disputed, chased by phone | Generated on delivery completion, sent on the 1st, reminders automated |
| Driver pay calculation     | Friday afternoon manual count, errors, disputes | Calculated automatically every Friday at 5pm, payslip sent to driver |
| Failed delivery cost       | Company absorbs £10–15 per failed drop, no recharge | Re-delivery fee raised automatically. Customer pre-alerted to prevent it. |
| Proof of delivery          | WhatsApp photos buried in chat, lost in disputes | Timestamped, filed by order ID, sent to customer on delivery |
| Business visibility        | Owner checks spreadsheet manually or just guesses | Weekly summary auto-delivered: revenue, on-time rate, driver performance |
```

Each row reveals on scroll from below, 40ms stagger across columns.

---

### 7. "What We Actually Build" — feature comparison table

Small eyebrow pill: "The Theliverops Difference"
Big heading: **"Why Theliverops Works Where Software Alone Doesn't."**
Subheading: *"The tools exist. They're just not connected, configured, or talking to each other. That's what we fix."*

9-row table:

| | **Generic SaaS tools** | **Custom dev agency** | **Theliverops** |
|---|---|---|---|
| Time to first result | Weeks of setup | Months of build | Live in 2 weeks |
| Fits your specific workflow | Maybe 70% | Yes, but costly | Yes — built around your ops |
| AI communication layer | Templated only | You spec it | Claude-powered, natural language |
| Connects your existing tools | Limited integrations | Custom everything | n8n bridges what you already have |
| Ongoing improvement | You configure it | Retainer or fixed scope | Monthly maintenance included |
| Cost | £50–500/mo SaaS fees | £5,000–20,000+ | £500–2,000 build + from £300/mo |
| Who understands logistics | Product team doesn't | You explain it to them | We already know the workflow |
| What happens when something breaks | Support ticket | Billable hours | We fix it — that's the retainer |
| Risk | Change nothing, keep losing money | High upfront cost | Low: start with one automation |

Each row slide-up reveals as it enters viewport.

---

### 8. Product feature showcase — sticky left, rotating right

Sticky left-side text column. Rotating right-side illustration/video panel. As user scrolls, left stays pinned, right cycles through 6 features.

**Features:**

1. **"WhatsApp Bot That Knows Your Orders"**
   Sub: Your customers text. The bot replies with real data.
   Body: *"Connects directly to your order sheet. Every status query answered in seconds, 24 hours a day, with no human involved."*
   `<!-- ILLUSTRATION: mobile phone showing natural WhatsApp conversation about delivery status -->`

2. **"Auto-Invoicing That Never Forgets"**
   Sub: Delivery confirmed → invoice sent. Automatically.
   Body: *"Pulls the job details, fills your template, emails it to the client. If they don't pay, it chases them at day 7, 14, and 21 — politely but persistently."*
   `<!-- ILLUSTRATION: clean invoice document appearing from a completed delivery card -->`

3. **"Driver Pay That Runs Itself"**
   Sub: Every Friday at 5pm. No spreadsheets.
   Body: *"Counts completed jobs per driver, applies their rate card, deducts any advances, and sends a payslip to their phone. Done before you've left the depot."*
   `<!-- ILLUSTRATION: driver receiving a WhatsApp message on phone showing weekly earnings summary -->`

4. **"Receipt Scanning, Hands-Free"**
   Sub: Photo the receipt. Claude reads it. Xero logs it.
   Body: *"Driver snaps a fuel receipt on WhatsApp. Our AI extracts the amount, vendor, and date, then files it directly to your accounting software. No paper, no delay, no VAT receipts lost in a glove box."*
   `<!-- ILLUSTRATION: phone camera pointed at a fuel receipt, data extracting into a spreadsheet -->`

5. **"Monday Morning Ops Summary"**
   Sub: You wake up already knowing the numbers.
   Body: *"Every Monday at 8am: total deliveries, revenue, on-time rate, best-performing driver, busiest zone, and failed delivery cost. One message. Everything you need to start the week sharp."*
   `<!-- ILLUSTRATION: mobile phone on a breakfast table showing a clean weekly ops summary message -->`

6. **"Your Tools, Finally Connected"**
   Sub: Circuit. Xero. WhatsApp. Google Sheets. One flow.
   Body: *"We don't replace the software you've already paid for. We connect it. When a delivery completes in Circuit, the invoice generates in Xero, the customer gets a confirmation, and the driver's pay updates — automatically."*
   `<!-- ILLUSTRATION: network diagram of connected tools with warm editorial style, arrows flowing between logos -->`

---

### 9. 2-week delivery timeline

Horizontal timeline, 4 milestones. Massive numerical typography in Bricolage Grotesque. SVG connecting line draws itself as you scroll.

- **"DAY 1."** — Free Ops Audit. We map your workflow, spot your 3 biggest money leaks.
- **"DAY 2–3."** — First Automation Live. Your top pain point automated and tested.
- **"DAY 4–10."** — Daily Improvements. We build, you review, we refine. Live feedback loop.
- **"DAY 14."** — Fully Running. Your ops are automated. Your dispatcher has their day back.

Connecting SVG line draws left-to-right tied to scroll progress via `stroke-dashoffset`.

---

### 10. Roadmap (Week 1 / Month 1 / Quarter 1 / Year 1)

Four-tier vertical timeline. Large time label in Bricolage Grotesque, 2-line description each. Vertical orange progress bar on the left fills as you scroll.

- **Week 1:** First automation live. Tracking bot, invoice trigger, or driver pay — whichever hurts most.
- **Month 1:** Full ops core connected. Customer comms, billing, POD filing, and weekly reporting all running.
- **Quarter 1:** Revenue gaps closed. Failed delivery recovery, surge pricing, re-booking sequences in place.
- **Year 1:** Ops intelligence layer. Owner has real-time visibility on every driver, zone, and profit margin — from their phone.

---

### 11. FAQ accordion

5 questions. Click expands with smooth height animation. One open at a time. Custom styling. Chevron rotates 180° on open.

**Questions:**

1. **"We already use Circuit / Track-POD / Onfleet — does this replace it?"**
   *No — and that's the point. Those tools manage your deliveries. We connect them to everything else: your invoicing, your customer comms, your driver pay, your reporting. We're the layer between your tools that those tools don't provide.*

2. **"We're a small operation — 3 vans. Is this overkill?"**
   *It's actually the opposite. A 3-van company where the owner is doing 6 jobs is exactly who this is built for. The smaller you are, the more every hour you spend on admin hurts. One automation that saves 2 hours a day gives a small team their evenings back.*

3. **"What if our workflow is different from other courier companies?"**
   *We start with an audit, not a template. We map exactly how your operation runs before we build anything. Every automation is configured around your specific process — not a generic courier workflow we copied from somewhere else.*

4. **"What does the monthly retainer actually cover?"**
   *Uptime monitoring. Fixes when something breaks. Updates when your workflow changes. And proactive suggestions when we spot a new money leak. You're not buying software — you're buying a ongoing ops partner who stays on top of your automation.*

5. **"How quickly can we actually see a result?"**
   *Day 3. That's when the first automation goes live. It won't be everything — but it will be the one thing that's costing you the most time or money right now. Most clients see the first measurable result within 72 hours of the audit.*

---

### 12. Final CTA

Full viewport. Massive heading in Bricolage Grotesque, every word in its own span for dramatic final reveal:

**"Ready to Stop Running Your Business on WhatsApp?"**

Sub-copy: *"Book a free 30-minute ops audit. We'll map your workflow, find your 3 biggest leaks, and show you exactly what we'd automate first — no obligation, no pitch deck."*

Same stacked CTA button:
- Top label (bold): "Book My Free Audit"
- Bottom label (smaller, muted): "30 minutes. We find your money leaks."

Below: full-bleed painted landscape placeholder:
```
<!-- ILLUSTRATION: painterly editorial landscape — UK delivery vans moving through a stylised warm highway scene at early morning, amber and rust tones, confident loose line work, New Yorker editorial quality -->
```

---

### 13. Footer

Minimal. Warm cream background.

- **Left:** Theliverops wordmark + orange circle logo
- **Center:** "Automating the Courier Ops No One Should Be Doing Manually." in muted italic
- **Right:** Social links (LinkedIn, X/Twitter) + email: hello@theliverops.com
- **Bottom bar:** © 2025 Theliverops. All rights reserved. | 4 nav links

---

## Scroll animation stack (apply globally)

1. **SplitText word-by-word reveal** on every H1, H2, H3. Words enter: `y: 40px → 0`, `opacity: 0 → 1`, stagger 40–60ms, ease `power3.out`. Trigger at 85% viewport entry.

2. **Paragraph fade-up** with 200ms delay after heading in its section. Stagger by paragraph.

3. **Pinned horizontal carousel** (section 5). Vertical scroll drives `x: translate` on cards container.

4. **Sticky text + rotating media** (section 8). CSS `position: sticky` on left column.

5. **Row-by-row reveals** for comparison grid (section 6) and feature table (section 7). GSAP ScrollTrigger batch.

6. **SVG line draw** on 2-week timeline (section 9). Animate `stroke-dashoffset` tied to scroll progress.

7. **Progress bar fill** on roadmap (section 10).

8. **Lenis smooth scrolling** globally. Wire to GSAP: `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker` integration.

9. **Soft parallax** on illustration placeholders at 0.85x scroll speed. Subtle.

10. **Orange underline draw animation** — when heading enters viewport, the underline draws left-to-right in 400ms using SVG stroke-dashoffset.

---

## Micro-interactions

- **Stacked CTA buttons** — hover: top label slides up slightly, bottom label becomes fully visible
- **Nav links** — underline draws left to right in 200ms on hover
- **Carousel cards** — hover: gentle 1.02 scale + soft warm shadow lift
- **FAQ accordion** — chevron rotates 180° on open, content height animates smoothly
- **Pain-point pills** (section 4) — hover: slight orange border tint, gentle lift

---

## Copywriting rules

- Every heading gets **one** orange-underlined phrase — never more than one per heading
- Em-dashes and colons for editorial rhythm
- Operator-speak always beats marketing-speak:
  - "No more spreadsheet archaeology" > "Streamline your data workflows"
  - "Driver texts the receipt. Claude reads it." > "Automated expense processing"
  - "£500–1,500/month in preventable losses" > "Significant cost savings"
- Specific numbers always: "Day 3", "2 weeks", "30–40 WhatsApp queries a day", "£10–15 per failed drop"
- Second person, present tense: "You're losing. We fix it."

---

## Output

A single production-ready Next.js page (or single HTML file with inlined CSS/JS). Include all 12 sections. All illustration and video placeholders use `<img>` and `<video>` tags with descriptive alt text and comments. Make it look complete and ship-ready even before real art is added. Prioritise scroll feel above all else — the page should feel alive from the first tick.

The page should feel like it was built by someone who has actually dispatched a van, chased an invoice, and argued with a driver about their Friday pay — because the person who built it has.

Go.

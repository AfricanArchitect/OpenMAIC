# LeapAI — Open-Source Stack & What to Fork
### Document 3 of 5 | March 2026

---

## Overview

LeapAI is built entirely on open-source tools — zero vendor lock-in, fully self-hostable,
COPPA/FERPA-compatible, and deployable by any school, library, state agency, or employer.
All tools below are available on OpenAlternative (openalternative.co).

---

## Core Platform: Fork This First

### OpenMAIC (Classroom Engine)
- **Repo:** github.com/AfricanArchitect/OpenMAIC
- **Replaces:** Coursera, Teachable, LearnWorlds
- **License:** AGPL-3.0
- **Deploy:** Vercel (one-click) or Docker

---

## Full Tech Stack

| Layer | Tool | GitHub | Replaces |
|-------|------|--------|----------|
| Auth / Parental Controls | Logto | github.com/logto-io/logto | Auth0, Okta |
| Database | Supabase | github.com/supabase/supabase | Firebase |
| Credentials | Documenso | github.com/documenso/documenso | DocuSign |
| CRM | Twenty | github.com/twentyhq/twenty | HubSpot |
| Analytics | Umami | github.com/umami-software/umami | Google Analytics |
| Community | Forem | github.com/forem/forem | Discord, Circle |
| Email | Listmonk | github.com/knadh/listmonk | Mailchimp |
| Video | PeerTube | github.com/Chocobozzz/PeerTube | YouTube |
| Automation | n8n | github.com/n8n-io/n8n | Zapier |
| Forms | Formbricks | github.com/formbricks/formbricks | Typeform |
| Project Mgmt | Plane | github.com/makeplane/plane | Linear, Jira |
| Docs / Wiki | Outline | github.com/outline/outline | Notion |

---

## Fork Priority Order

1. OpenMAIC → rebrand as LeapAI
2. Supabase — database foundation
3. Logto — age-assurance + parental controls (Framework §I required)
4. Umami — analytics before first pilot
5. n8n — credential issuance automation
6. Formbricks — parent consent forms for Georgia pilot
7. Outline — teacher resource wiki
8. Twenty — CRM for pilot partner tracking

---

## Security & Compliance Checklist

- [ ] Logto age-gating for all accounts under 13
- [ ] Parental attestation flow (Framework §I)
- [ ] No PII stored for model training
- [ ] Umami: no cookies, IP anonymization on
- [ ] Supabase Row-Level Security enabled on all learner tables
- [ ] PeerTube: no external recommendations for under-13
- [ ] n8n self-hosted (no data leaves your infrastructure)
- [ ] Formbricks: parent consent records with timestamp + IP for audit

---

*All tools available at openalternative.co. LeapAI is AGPL-3.0.*

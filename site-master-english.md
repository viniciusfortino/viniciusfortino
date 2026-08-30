# SITE MASTER — fortino.dev (ENGLISH)

> **Working document. Do not publish as-is.**
> Unlike cv-master.md (used to derive CVs sent to employers), this document is used
> to derive SITE CONTENT: bio, portfolio case studies, and article skeletons. Nothing
> here should go live without a confidentiality review — see the note at the top of
> each case study.

---

## CONFIDENTIALITY NOTICE — read before publishing any case study

Key difference between a CV and a website: a CV goes to a specific recruiter, under
that recipient's control. A website is public, indexed, and searchable by anyone —
including former colleagues, former managers, and competitors of your past employers.

Before publishing any case study below, review:
- Internal tool names (e.g. the name of an alerting system, the name of an internal
  conversational assistant, internal project codenames) — generalize or omit.
- Internal architecture terms (e.g. an internal field/key name) — describe the pattern
  ("a person identifier separated from the access binding"), not the exact name used
  internally.
- Numbers that were never made public by the company (internal latency budgets,
  business metrics, exact volumes not disclosed in press or annual reports) — use only
  what is already public (e.g. Stone's 12M users and Itaú's 29M requests/day already
  appear on your CV and LinkedIn, so they are already semi-public; but the internal
  latency budget was never disclosed).
- If unsure about a specific item, the test is: "would this come up in a public talk my
  former employer would approve of, or is it something only insiders would know?"

The texts below were already written with this filter in mind — at the level of
architectural pattern, not exact implementation — but review again before publishing.

---

## SUGGESTED SITE STRUCTURE

1. **Home** — tagline + short bio + links to case studies and articles
2. **About** — long bio
3. **Portfolio** — 3 case studies (Itaú/PIX, Stone/unification, Mercado Livre/SPOF)
4. **Writing** — the two technical articles (CIBA, PF/PJ modeling)
5. **Contact** — email, LinkedIn, GitHub

---

## TAGLINE (for the top of the site)

Option 1: Security and identity engineering for financial institutions.
Option 2: IAM at scale — OAuth, OIDC, CIBA and identity modeling for systems where failure has regulatory consequences.
Option 3: I build the identity layer for financial systems that can't afford to fail.

---

## SHORT BIO (for Home, ~50 words)

Software engineer focused on security, with over a decade building identity and
access systems for financial institutions. I led PIX authorization at Itaú Unibanco
and the authentication unification across the Stone group, for 12 million users.
Currently an MSc candidate in Cyber Security at the University of London.

---

## LONG BIO (for the "About" page)

I've spent over twelve years in software development, and the last five specializing
in identity and access — IAM and CIAM — within Brazilian financial institutions.
It's a field I learned to take seriously in a specific way: in these systems, an
authentication failure isn't just a bug, it's an incident with immediate regulatory
consequences.

I spent time at Itaú Unibanco, where I led the authorization team of the identity
platform behind the Banking-as-a-Service product — responsible for the production
authorization flow of PIX, at tens of millions of requests per day. Later, at Stone,
I led the consolidation of the group's authentication systems: multiple in-house
solutions, one per company, unified into a single platform for 12 million users,
with no incident during the migration.

Along the way, I worked with OAuth 2.0, OpenID Connect, CIBA, SAML, SCIM, FIDO2 and
identity modeling in multi-tenant environments — always through the lens of Brazilian
data protection law, central bank regulation, and audit controls. I also enjoy the
part of the job that's about solving the problem nobody documented: finding the
critical dependency with no fallback, or the metric everyone was reading wrong
because the baseline was contaminated.

I'm currently an MSc candidate in Cyber Security at the University of London. I write
here about the topics in identity and security that interest me most — usually things
I learned by solving a real problem, not theory.

I hold dual citizenship (Portuguese/EU) and speak Portuguese, English and Spanish.

---

## PORTFOLIO — CASE STUDIES

### Case 1 — Authorizing PIX at scale, at Itaú Unibanco

*(Review internal system names before publishing — see notice at the top)*

The challenge: build the authorization layer for a national instant payment system,
inside a serverless architecture, with a tight latency budget and subject to the
regulatory controls of one of Latin America's largest financial institutions.

I directly led the authorization team of the identity platform behind Itaú Unibanco's
Banking-as-a-Service product. The platform was built in-house on AWS Lambda, within a
technical partnership between the bank and AWS — a deliberate choice to explore
serverless architecture for authentication and authorization, not an accident.
Multi-tenant, with per-account isolation and an RBAC model combining global roles
inherited by all tenants with tenant-specific roles.

One of the more relevant adjustments was infrastructural: the critical-path latency
requirement didn't sit well with serverless cold starts, so we migrated the runtime
to cut that time down, and negotiated higher concurrency limits through the AWS
partnership.

Over time, we consolidated the authentication component onto a mature market
provider, keeping authorization — where the logic is business-specific — on the
in-house platform. That wasn't a retreat: it was recognizing that once the product
became Banking-as-a-Service for third parties, the cost of maintaining in-house
authentication (certification, compliance, maintenance surface) stopped paying off
against a standard market vendor.

**Result:** a platform sized for tens of millions of authentications per day, in
production with multiple tenants, including the bank itself and external partners,
under data protection compliance.

---

### Case 2 — Unifying identity for 12 million users, with zero incidents

*(Review internal field names — use "person identifier" instead of the exact internal
term — see notice at the top)*

The challenge: a Brazilian financial group grew through acquisitions, and each
company in the group had its own authentication system. The decision was to unify
everything onto a single platform, migrating 12 million users with no perceptible
downtime and without compromising the security of the payment flow running through
it — including PIX.

I led this consolidation with two direct teams: authentication and authorization.
The work had three intertwined fronts:

**Flow security.** The previous solution had no PKCE, used tokens that couldn't be
revoked, and had no support for server-initiated authorization. We introduced all
three, including CIBA (Client Initiated Backchannel Authentication) for authorization
with approval on a trusted device — a pattern few Brazilian implementations run in
production.

**Identity modeling.** The most interesting problem was one of modeling, not
protocol: the same individual could exist in multiple contexts — personal account
holder, accountant for a client company, legal representative for another. Using the
national identifier as the primary key collided with that scenario. The fix was to
separate the person's identity — a stable identifier, neutral to context — from the
access binding, which carries the context (company, role). It's the distinction
between *subject* and *account binding*, applied to a real duplication problem
across acquired companies' databases.

**Migration execution.** Instead of a single cutover, the migration was phased: the
new store started in a recording-only mode (not yet authoritative), then moved to
provisioning users on first login, and only after sufficient coverage came the bulk
backfill. Rollback and a contingency mechanism were available the whole time — and
were never triggered. Completed in three months, within a critical window bounded by
multiple full deployment freezes.

A side finding that illustrates the kind of problem that shows up in this work: the
authentication failure rate the team was monitoring was contaminated by an artifact
of the MFA flow itself — the system recorded a denied attempt before identity
verification even happened, artificially inflating the error metric. Left uncorrected,
any decision based on that metric would have been wrong.

**Result:** 12 million users migrated, zero rollback triggered, and a platform
instrumented from scratch — MAU per group company, request volume, true failure
rate — where none of those metrics existed before.

---

### Case 3 — Finding the single point of failure nobody had documented

Not every relevant finding comes from a months-long project. Sometimes it comes from
systematically mapping something everyone uses and nobody fully documented.

Taking over leadership of a front-end squad responsible for the acquisition flows of
a financial product — operating across three countries, with multiple entry points
across web and mobile — I did an end-to-end mapping of how those flows actually
worked in practice, not how they were documented.

The finding: a critical dependency that every flow relied on, with no fallback and no
contingency plan. If that service went down, there was no alternative path — just
total, silent unavailability, with no one having mapped the blast radius beforehand.

I led the remediation plan and produced the resulting architecture documentation,
which became a reference point for other technical leaders in the same business
unit — people who had the same questions about those flows and, until then, had no
reliable map to consult.

**Result:** risk of total unavailability identified and addressed before it
materialized; architecture documentation adopted as the reference standard for the
business unit.

---

## ARTICLES — SKELETONS

### Article 1 — CIBA in production at a payment institution

**Why this topic:** few articles, in Portuguese or even English, describe CIBA outside
the RFC and vendor documentation. It's a genuine differentiator — most IAM candidates
and writers have never implemented it in production.

**Skeleton:**
1. The problem CIBA solves — authorization when the device initiating the flow isn't
   the device approving it (contrast with Authorization Code Flow and Device Flow).
2. Why CIBA and not Device Flow — specific UX and trust-model trade-offs in a payment
   context.
3. The trusted-device binding model — how to approve a server-initiated request
   securely, without exposing the attack surface of naive polling.
4. Implementation pitfalls — what goes wrong the first time you implement this
   (speak in generic terms, without revealing former-employer-specific architecture).
5. When CIBA is worth it and when it's unnecessary complexity.

**Status:** topic articulated, technical content already mastered. Just needs writing.

---

### Article 2 — Identity modeling when the same person holds multiple roles

**Why this topic:** a very common problem in markets with a single national
identifier (CPF in Brazil, but the pattern applies to any national ID) and very
poorly solved in most implementations — usually discovered late, after the
identifier has already become a primary key in production.

**Skeleton:**
1. The common mistake — using the national identifier as the primary identity key.
2. The scenario that breaks this model — the same person in multiple contexts
   (account holder, attorney-in-fact, legal representative), and databases from
   different acquired companies consolidating.
3. The fix — separating identity (subject, stable, context-neutral) from access
   binding (which carries the context). Without citing any former employer's
   internal field name — use generic or original naming.
4. Migrating from an old model to the new one with no downtime — shadow mode, lazy
   provisioning, backfill strategy (in generic terms, without internal numbers).
5. What gets easier once this is solved correctly (audit, LGPD/GDPR, deduplication).

**Status:** topic articulated, technical content already mastered. Just needs writing.

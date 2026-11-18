# Grid Labs Hosting: plan claims and conversion QA

Hosting websites present technical and commercial information that visitors may use to make a purchase. Every promise must have an owner, a source, a time period, and a clear scope before being presented as fact.

## Claim-verification register

| Claim | Required evidence | Important limitation |
| --- | --- | --- |
| Monthly/annual price | Current approved price table and currency | Separate promotional discounts, renewal and tax terms |
| Storage/bandwidth | Published plan specification | Distinguish quotas from “unlimited” marketing language |
| Uptime/SLA | Signed service terms and measurement period | Do not confuse an SLA with observed historical availability |
| Backups/security | Verified deployment and documented policies | Do not imply guaranteed recovery or protection |
| Support response | Published service hours and response commitments | Avoid treating marketing estimates as contractual targets |
| Locations/regions | Current infrastructure inventory and provider attribution | Never claim local data residency without evidence |
| Refund/trial | Approved terms with eligibility and limits | Do not hide exclusions behind a call-to-action |

## Visitor journey acceptance

1. Compare at least two plans and confirm all prices share the same unit and billing period.
2. Verify technical comparison labels are defined in plain language or concise help text.
3. Check that primary CTAs lead to a real next step and never imply purchase success without confirmation.
4. Review mobile card alignment, contrast, focus order, 200% zoom and keyboard reachability.
5. Test invalid or unavailable checkout/contact states where implemented; offer recovery rather than a silent dead end.
6. Confirm contact and support routes, legal terms and any necessary caveats are discoverable before purchase.

## Repository-level preview

The static site is served from **index.html** at repository root with **css/**, **js/** and **images/** assets. Preview it with:

~~~bash
python -m http.server 8000
~~~

Then inspect http://localhost:8000/ and relevant links. No automated runtime test is implied by this documentation; record the browsers and viewports actually reviewed.

## Release documentation

Attach a claim-by-claim before/after table, approved source/owner, last verification date, changed files, screenshots for plan-layout changes, link results and rollback plan. Technical claims without current supporting evidence should be removed or clearly labelled unconfirmed.

## Rollback and correction

If a published price or availability statement is wrong, prioritize corrected public information and customer impact review. Revert the content change only after preserving the evidence trail and verifying the visible page reflects the correction.

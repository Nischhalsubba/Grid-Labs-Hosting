# Hosting offer accuracy and release controls

## Actual deployment model
The source is served from repository-root `index.html` with `css/`, `js/`, `images/` and `fonts/`. The README records a GitHub Actions Pages workflow and an alternative main-branch root publish path. This guide prevents price/availability/operational claims from being treated as facts just because they are displayed in the template.

## Offer evidence contract
| Claim | Before publication, confirm |
| --- | --- |
| Plan name, billing term, price and currency | Approved price list, effective date, renewal terms and taxes |
| Disk, domains, bandwidth and mailbox limits | Actual product provisioning configuration |
| Uptime guarantees, support hours or performance | Contract/SLA and named operational owner |
| Backup, security and restoration | Implemented mechanism and verified operational procedure |
| Refund, cancellation, and migration | Customer policy and owner approval |
| Signup/checkout/domain availability | Working endpoint, expected errors and operator sign-off |

Avoid fabricated reviews, template service promises, and real customer information in this public repository.

## URL and interaction contract
1. From a local static server (`python3 -m http.server 8000`), visit the homepage and activate navigation anchors `#home`, `#services`, `#features`, `#testimonial`, `#pricing`, and `#contact`.
2. Verify CTA destinations, pricing information and contact methods on mobile and desktop. Ensure focus is visible and screen-reader names match actions.
3. Inspect the hero domain-entry form: do not label it real availability search until a verified lookup/response exists.
4. Recheck root and project-path asset resolution. Local references in `css/`, `js/`, and `images/` must load with consistent case.
5. Check descriptive page title, external link security, alt text, responsive comparison layout and overflow.

## Before merge / after release
- [ ] Claims and pricing are backed by an approved dated source.
- [ ] No secrets, customer data or fake guarantee percentages added.
- [ ] PR diff contains only intended files.
- [ ] Static preview has no broken local assets or navigation.
- [ ] Manual narrow viewport and keyboard checks are recorded.
- [ ] Required GitHub Actions checks complete.
- [ ] Deployment configuration is explicitly identified; no obsolete `site/` folder assumed.
- [ ] Published Pages URL and primary CTA are retested after deployment.
- [ ] Previous approved pricing text and rollback SHA are recorded.

## Reviewer evidence
```text
PR / reviewer / date:
Offer owner and evidence reference:
Affected plans and customer promises:
Local responsive, keyboard and link results:
Source branch, Pages mode, published URL:
Deployment run and live verification:
Exceptions with follow-up owner:
Rollback commit:
```

## Boundary
A passing static build does not prove hosting uptime, supported infrastructure, billing, or domain-registration capability. These require separate contractual and operational verification. This file is a release procedure, not a claim that such integrations have been implemented.

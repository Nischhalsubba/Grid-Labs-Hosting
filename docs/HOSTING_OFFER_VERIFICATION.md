# Hosting-offer accuracy and customer decision checklist

> Status: contributor review checklist, not a claim that the product has passed an audit. This document introduces review expectations; it does not change application behavior.

## Why this exists

Keep hosting plan pricing, resources and reliability promises transparent in a static marketing site.

## Review rules

1. Compare displayed plan names, currency, billing period, renewal price, setup fees, storage, bandwidth, backup, region and support terms against the current provider-approved source.
2. Explain limits and exclusions as visibly as features. Never present assumed uptime, backup frequency, response time or geographic coverage as contractual guarantees.
3. Verify what the main CTA does: product selection, checkout, signup or contact. Broken, placeholder or external links must not masquerade as live purchase paths.
4. Review accessibility: keyboard focus, semantic plan comparison tables, mobile horizontal overflow, contrast, alt text and reduced-motion preferences.
5. Treat logos, testimonials, customer counts and partner badges as evidence-based claims requiring attribution and permission.
6. Document operational status honestly: static marketing pages do not prove that hosting products, automated recovery or customer support systems are running.

## Verification

This repository is a static website with `index.html`, `css/`, `js/` and `scss/` at its root. Check relative URLs after deployment, manually test plan cards and contact CTA at narrow and wide breakpoints, inspect browser console/network errors and keyboard navigation. Do not invent an npm build command where none is defined.

## Required evidence in a change request

PR: changed plan/claim with cited approved source and verification date, price and renewal comparison, browser screenshots, working link targets, manual a11y test notes and unverified claims.

## Rollback and incident response

Revert inaccurate offer copy, replace potentially misleading CTA destinations with a verified contact route, and correct any stale cached metadata.

## Acceptance criteria

- [ ] The change addresses a stated user or maintainer risk.
- [ ] Evidence and source-of-truth references are attached or explicitly marked unavailable.
- [ ] Relevant automated checks are reported with actual outcomes; unrun checks are not marked passing.
- [ ] Negative, failure and recovery states are accounted for.
- [ ] A reviewer can understand what changed, remaining risk and how to revert it.

Document owner: repository maintainers. Review this checklist when workflows, dependencies or public claims materially change.

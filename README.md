<div align="center">

# Grid Labs Hosting

**A hosting-services website project for communicating plans, infrastructure value, support, and clear conversion paths through a responsive web experience.**

![Top language](https://img.shields.io/github/languages/top/Nischhalsubba/Grid-Labs-Hosting?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/Nischhalsubba/Grid-Labs-Hosting?style=flat-square)
![Repo size](https://img.shields.io/github/repo-size/Nischhalsubba/Grid-Labs-Hosting?style=flat-square)

[Browse source](https://github.com/Nischhalsubba/Grid-Labs-Hosting/tree/main) · [Issues](https://github.com/Nischhalsubba/Grid-Labs-Hosting/issues)

</div>

## Overview

**Grid Labs Hosting** is documented around a typical hosting-customer journey: understand the offer, compare relevant capabilities, build trust, and reach a purchase, signup, or contact path with minimal ambiguity.

<details open>
<summary><strong>🏗️ Interactive website architecture</strong></summary>

```mermaid
flowchart LR
    VISITOR["Visitor"] --> SITE["Hosting website"]
    SITE --> VALUE["Hosting value proposition"]
    SITE --> PLANS["Plans / features"]
    SITE --> TRUST["Reliability / support information"]
    SITE --> CTA["Signup / contact"]
    STYLE["Visual system"] --> SITE
    SCRIPT["Interactions"] --> SITE
```

</details>

## Visitor flow

```mermaid
flowchart TD
    LAND["Land on site"] --> NEED["Understand hosting offer"]
    NEED --> COMPARE["Review plans / features"]
    COMPARE --> TRUST["Check support / credibility"]
    TRUST --> DECIDE["Choose next step"]
    DECIDE --> ACTION["Signup / contact / continue"]
```

## Audience guide

| Audience | Focus |
|---|---|
| Customers | Plans, capabilities, trust and support |
| Developers | Page structure, interactions and delivery |
| Designers | Comparison clarity, responsive layout and conversion hierarchy |
| Content teams | Accurate plan details, claims, pricing and metadata |

## Getting started

```bash
git clone https://github.com/Nischhalsubba/Grid-Labs-Hosting.git
cd Grid-Labs-Hosting
```

Open `index.html` or run `python3 -m http.server 8000` from the repository root and visit `http://localhost:8000/`. No build step is needed.

## GitHub Pages

The static site is stored at the **repository root**: `index.html`, `css/`, `js/`, `images/`, and `fonts/`. Asset URLs are relative, so the project also works at `https://nischhalsubba.github.io/Grid-Labs-Hosting/`.

The workflow in `.github/workflows/quality.yml` validates the site on pull requests and deploys the repository root on pushes to `main`.

In **Repository Settings → Pages → Build and deployment**, use **GitHub Actions** for the workflow above. Alternatively, to deploy directly from a branch without the Actions deployment, choose **Deploy from a branch → main → / (root)**. Do not rely on the old `site/` directory.

A root `.nojekyll` file allows GitHub Pages to serve the original static assets without Jekyll processing.

## Design & trust

Hosting sites should make technical claims understandable without hiding important constraints. Keep plan comparisons readable, focus visible, contrast sufficient, calls to action distinct, and mobile layouts free of horizontal comparison-table disasters.

## SEO & discoverability

Use accurate terms such as **web hosting, hosting plans, website hosting, hosting services, server hosting, managed hosting, and hosting support** only when supported by the actual offering. Maintain unique titles/descriptions, semantic headings, structured organization/product data where appropriate, canonical URLs and social metadata.

## Contribution flow

```mermaid
flowchart LR
    CHANGE["Plan / UI change"] --> VERIFY["Verify claims"] --> BUILD["Implement"] --> RESPONSIVE["Responsive + accessibility review"] --> SEO["Metadata check"] --> PR["Pull request"]
```

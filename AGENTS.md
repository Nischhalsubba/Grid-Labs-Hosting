# Repository Instructions

## Setup

This is a static Bootstrap-based hosting landing page. There is no confirmed package manager or build step in the current repository. Open `index.html` directly or serve the repository with a simple static server.

## Commands

```bash
python -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## Key files

- `index.html`: main landing page structure and section content.
- `css/style.css`: project-specific styling.
- `css/bootstrap.min.css`: Bootstrap layout and component styling.
- `js/app.js`: sticky navbar behavior and contact-form validation.
- `images/`: logo, favicon, feature illustrations, and testimonial avatars.

## Coding conventions

- Keep the site static unless a real backend or static-form provider is intentionally added.
- Edit `index.html` for page sections and content.
- Keep Bootstrap classes consistent with the existing layout.
- Use meaningful alt text for meaningful images.
- Do not imply the domain search or contact form is functional unless it is connected to a real service.
- Replace placeholder testimonials, pricing, hosting claims, and contact details before production use.

## Testing and verification

Manually verify:

- navbar links scroll to the correct sections
- mobile navbar toggles correctly
- domain search does not submit to a fake service
- pricing monthly/yearly tabs work
- testimonial carousel works
- contact validation messages appear
- images and icons load
- page is readable on mobile
- all placeholder content is removed before public launch

## Do not

- Do not add fake testimonials.
- Do not claim unlimited hosting unless terms and backend service support it.
- Do not publish placeholder pricing as real pricing.
- Do not collect contact form submissions without a backend, consent flow, or form provider.
- Do not add tracking scripts without a privacy notice.

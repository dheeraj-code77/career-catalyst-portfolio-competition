# Career Catalyst

A responsive portfolio-building competition website for Career Catalyst, presented by the Disha Placement Cell at IIT Patna.

The site introduces the competition, explains the value of portfolios and Proof of Work, presents the participation steps, and links students to the official registration form.

## Live website

<https://dheeraj-code77.github.io/career-catalyst-portfolio-competition/>

## Source repository

<https://github.com/dheeraj-code77/career-catalyst-portfolio-competition>

## Features

- Responsive layouts for desktop, laptop, tablet, and mobile.
- Light and dark themes.
- Smooth navigation through the competition journey:
  1. Start the Journey → Quick Introduction
  2. Next: How to Apply → the eight participation steps
  3. I'm Ready to Participate → registration
- Autoplay introduction video with visible native controls and dedicated audio controls.
- Interactive hover and pressed states on competition and participation cards.
- Registration through the official Microsoft Forms link: <https://forms.cloud.microsoft/r/XcKHw0eNt4>.
- No build step, framework, or package installation is required.

## Run locally

From the project directory, start a static HTTP server:

```powershell
python -m http.server 4173
```

Then open <http://127.0.0.1:4173/> in a browser.

## Project structure

```text
.
├── assets/
│   └── career-catalyst-logo.png
├── VID_20261119_151206_609.mp4
├── VID_20261119_151206_609-audio-compatible.mp4
├── index.html
├── script.js
├── styles.css
└── .github/
    └── workflows/
        └── pages.yml
```

The supplied source screenshot used to extract the logo is excluded from version control; only the cropped logo used by the site is included.
The original video is preserved; the website serves the audio-compatible derivative.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the static site to GitHub Pages whenever changes are pushed to `main`, and can also be started manually from the repository's Actions tab. Configure the repository's Pages source as **GitHub Actions**. Once its first deployment succeeds, GitHub Pages displays the live URL in the workflow run and repository settings.

## External services

- Google Fonts provides Inter and Space Grotesk, with local system-font fallbacks.
- Registration opens the official Microsoft Forms URL in a new tab.

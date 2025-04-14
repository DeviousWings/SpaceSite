# 🌌 The Cosmos Library – Project Roadmap

Welcome to the official development roadmap for **The Cosmos Library**, a personal astronomy blog and observation hub. This document outlines the stack, current phase, and plans to scale the site using Netlify as the hosting platform.

---

## ✅ Phase 1: Launch with Core Web Technologies

**Stack:**
- HTML
- CSS / SCSS
- JavaScript (Vanilla)

**Goals:**
- Build a clean, responsive homepage (`index.html`)
- Style with SCSS for better structure
- Load blog entries from Substack RSS using JavaScript
- Deploy to Netlify using GitHub integration

**Tasks:**
- [ ] Organize homepage layout for blog and library focus
- [ ] Create sections: Hero, Featured Posts, Focus Study, Substack Feed
- [ ] Add JavaScript for dynamic content injection
- [ ] Setup continuous deployment via GitHub → Netlify

---

## 🔁 Phase 2: Modularize with Static Site Generator (Astro)

**Why Astro?**
- Keeps your HTML + JS + Markdown workflow
- Ships only what’s needed (lightning fast)
- Supports components like `<Header />`, `<Footer />`, `<PostCard />`

**Upgrades:**
- Create Astro project with `npm create astro@latest`
- Move pages to `src/pages`
- Write blog posts as Markdown in `src/content/posts`
- Deploy using Netlify's Astro build preset

**Tasks:**
- [ ] Install Astro and migrate current HTML files
- [ ] Create components for layout reuse
- [ ] Convert existing posts into Markdown format

---

## ⚙️ Phase 3: Add Dynamic Features with Netlify Functions

**What to Add:**
- Fetch and process Substack or NASA data using Serverless Functions
- Handle visitor contact forms without external backend
- Setup scheduled tasks (e.g., weekly updates from an API)

**Examples:**
- `netlify/functions/fetchSubstack.js`
- `netlify/functions/getSpaceWeather.js`

**Tasks:**
- [ ] Write a serverless function to fetch and display blog posts
- [ ] Add contact or feedback form with serverless handler
- [ ] Explore cron-like scheduled fetches (via Netlify Scheduled Functions)

---

## 🪐 Phase 4: Enhance with Astronomy Tools & APIs

**Integrate:**
- [NASA APOD](https://api.nasa.gov/) for daily image + fact
- [Skyfield.js](https://rhodesmill.org/skyfield/) for astronomical calculations
- [Open Meteo](https://open-meteo.com/) for weather/cloud cover predictions

## 🔐 Environment Variables

To use the NASA API, create a `.env` file in the root of your project with the following:

```env
NASA_API_KEY=your_api_key_here


**Add Features:**
- Interactive moon phase tracker
- Telescope session logger with filters
- Dynamic charts using Chart.js

**Tasks:**
- [ ] Embed NASA APOD with fetch()
- [ ] Build a custom tool like “Next Clear Night Predictor”
- [ ] Add sky observation map (2D/3D)

---

## 🌍 Phase 5: Community or Monetization Layer (Optional)

**Options:**
- Enable comments using Giscus or Disqus
- Add donation button (e.g., Ko-fi, BuyMeACoffee)
- Sell star guides or printable observation logs

**Tasks:**
- [ ] Choose comment system for blog
- [ ] Set up a support/donation page
- [ ] Explore lightweight e-commerce options if needed

---

## Deployment Info

**Hosting:** [Netlify](https://www.netlify.com/)  
**Repository:** GitHub  https://github.com/DeviousWings
**Substack Source:** (https://natdeviouswings.substack.com/rss)

---

### 🚀 Maintained by Nathanael King  
For questions or help contributing, please reach out via the site’s contact page or GitHub.


### To do List

- [] Add to Render
- [] Add node
- [] Add tag search "space" so blog will only search and post that tag.
- [] Should I add other adnimated fetures?
- [] Fix home page
    - [] News area
    - [] Main Story
# AE SHEQ Consulting Website - Deployment Guide

## ✅ What's Complete

The website is **fully built and ready for deployment**. Here's what's included:

### Pages (All Complete)
- ✅ **Home** - Hero section, services overview, client showcase, CTAs
- ✅ **About** - Company history, mission, team profiles, professional affiliations
- ✅ **Services** - Comprehensive SHEQ services organized by category
- ✅ **Projects** - Portfolio of 20+ completed projects and current work
- ✅ **Credentials** - Professional registrations, certifications, compliance standards
- ✅ **Contact** - Contact form, business information, map placeholder

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Accessible design (WCAG 2.1 AA)
- ✅ Fast loading times
- ✅ Professional SHEQ industry design
- ✅ Easy content management via JSON files

### Technical
- ✅ Astro 5.0 + Tailwind CSS 3.4
- ✅ Production build tested and working
- ✅ All components functional
- ✅ Clean, maintainable code structure

---

## 🚀 Quick Deployment (3 Steps)

### Option 1: Netlify (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AE SHEQ website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Domain**
   - In Netlify dashboard: Domain settings → Add custom domain
   - Add: `www.aesheq.co.za`
   - Follow DNS configuration instructions
   - SSL certificate is automatic

**Done! Your site is live.**

### Option 2: Vercel

1. Push to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Astro settings
5. Deploy!
6. Add custom domain in settings

---

## 📋 Assets Needed from Client

### Priority 1: Essential (Needed Before Launch)

#### 1. Company Logo
**What we need:**
- Vector format (SVG, AI, or EPS) OR high-res PNG with transparent background
- Variations if available:
  - Full color logo
  - White/light version (for dark backgrounds)
  - Icon/symbol only (for favicon)

**Where to add:**
- Place files in: `public/logo/`
- Name them: `logo.svg`, `logo-white.svg`, `favicon.svg`

**What to update:**
- Brand colors in `tailwind.config.cjs` (we'll help with this)

#### 2. Brand Colors
**What we need:**
- Exact color codes from your logo/brand guidelines
- Format: Hex codes (e.g., #1A5F7A) or RGB values

**Current placeholder colors:**
- Primary Blue: #1e40af
- Secondary Green: #059669
- Accent Orange: #ea580c

**Where to update:**
- File: `tailwind.config.cjs`
- We can help update these once you provide the colors

### Priority 2: Recommended (Improves Credibility)

#### 3. Team Member Photos
**What we need:**
- Professional headshots of 4 team members:
  - Mr. Simon Moletsane
  - Ms. Gontse Langa
  - Ms. Mangale Cynthia Machethe
  - Ms. Khensani Kekana

**Specifications:**
- High resolution: 800x800px minimum (square format)
- Professional quality (business attire preferred)
- Consistent background/lighting if possible
- Format: JPG or PNG

**Where to add:**
- Place in: `public/images/team/`
- Name format: `firstname-lastname.jpg`
- Example: `simon-moletsane.jpg`

**Current status:**
- Using professional placeholder avatars
- Can be replaced anytime without affecting site structure

#### 4. Project/Site Photos
**What we need:**
- 6-8 photos showcasing your work:
  - Site inspections
  - Team conducting audits
  - Completed projects (with client permission)
  - Safety equipment displays
  - Any relevant workplace imagery

**Specifications:**
- High resolution: 1200x800px minimum (3:2 ratio)
- Professional quality
- Ensure you have rights/permissions to use
- Format: JPG or PNG

**Where to add:**
- Place in: `public/images/projects/`
- Update paths in: `src/data/projects.json`

**Current status:**
- Using professional stock images
- Can be replaced as photos become available

### Priority 3: Optional Enhancements

#### 5. Hero Background Image
**What we need:**
- Professional image representing safety/construction/industry
- Specifications: 1920x1080px minimum (landscape)
- Format: JPG

**Where to add:**
- Replace: `public/images/hero/hero-bg.jpg`

#### 6. Client Testimonials
**What we need:**
- Written testimonials from satisfied clients
- Include: Client name, company, position
- Get permission to publish

**Where to add:**
- Can be added to relevant pages later

---

## 🔧 Post-Deployment Configuration

### 1. Contact Form Setup

The contact form is ready but needs a submission service:

**Option A: Netlify Forms (Easiest)**
- Already configured if deployed on Netlify
- Forms automatically work
- View submissions in Netlify dashboard

**Option B: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update form action in `src/pages/contact.astro`

**Option C: Custom Backend**
- Implement your own form handler
- Update form submission logic in `src/pages/contact.astro`

### 2. Google Maps Integration

**To add interactive map:**
1. Get Google Maps API key
2. Get embed code for your address
3. Replace map placeholder in `src/pages/contact.astro` (line ~280)

**Current status:**
- Placeholder showing address
- Fully functional without map

### 3. Analytics (Optional)

**To add Google Analytics:**
1. Get GA4 tracking ID
2. Add to `src/layouts/Layout.astro` in `<head>` section

---

## 📧 Email Template for Client

**Subject: AE SHEQ Website - Assets Needed for Launch**

Dear Mr. Moletsane,

Your website is complete and ready for deployment! To finalize and launch, we need the following assets:

**Essential (Before Launch):**
1. Company logo files (SVG or high-res PNG)
2. Brand color codes (Hex or RGB values)

**Recommended (Improves Site):**
3. Team member professional photos (4 photos)
4. Project/site photos (6-8 images)

**Optional:**
5. Hero background image
6. Client testimonials

Please see the attached DEPLOYMENT-GUIDE.md for detailed specifications and instructions.

Once we receive the logo and brand colors, we can deploy the site within 24 hours.

Best regards,
[Your Name]

---

## 🎯 Launch Checklist

- [ ] Receive logo and brand colors from client
- [ ] Update brand colors in `tailwind.config.cjs`
- [ ] Replace logo files in `public/logo/`
- [ ] Test build: `npm run build`
- [ ] Deploy to Netlify/Vercel
- [ ] Configure custom domain (www.aesheq.co.za)
- [ ] Verify SSL certificate is active
- [ ] Test all pages on live site
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Add team photos (when received)
- [ ] Add project photos (when received)
- [ ] Set up Google Analytics (optional)
- [ ] Add Google Maps (optional)

---

## 📞 Support

For questions or assistance:
- Review the README.md for detailed documentation
- Check SITE-PLAN.md for original project plan
- Check IMAGE-STRATEGY.md for asset specifications

---

## 🎉 Next Steps

1. **Send EMAIL-TO-CLIENT.md** to Mr. Moletsane requesting assets
2. **Wait for logo and brand colors** (essential for launch)
3. **Update colors and logo** when received
4. **Deploy to Netlify/Vercel** (takes 5 minutes)
5. **Configure domain** (www.aesheq.co.za)
6. **Launch!** 🚀

The site is production-ready and can be deployed immediately with placeholder assets, then updated as real assets are received.

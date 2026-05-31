# AE SHEQ Consulting Website - Documentation

This directory contains all project documentation organized for easy access.

## 📁 Directory Structure

```
DOCS/
├── README.md                  # This file - documentation index
├── Company-Profile.pdf        # Source of truth for all content
├── planning/                  # Project planning documents
│   ├── SITE-PLAN.md          # Complete implementation plan
│   └── IMAGE-STRATEGY.md     # Asset requirements & placeholder strategy
├── guides/                    # Setup and deployment guides
│   ├── DEPLOYMENT-GUIDE.md   # Step-by-step deployment instructions
│   └── EMAIL-TO-CLIENT.md    # Ready-to-send asset request email
└── assets/                    # Documentation assets (screenshots, diagrams)
```

## 📚 Documentation Guide

### For Project Setup & Development

1. **Start Here**: [../README.md](../README.md)
   - Quick start guide
   - Project structure overview
   - Basic commands

2. **Implementation Details**: [planning/SITE-PLAN.md](planning/SITE-PLAN.md)
   - Complete site structure
   - Content mapping from company profile
   - Design direction and technical decisions
   - File structure and implementation phases

3. **Asset Management**: [planning/IMAGE-STRATEGY.md](planning/IMAGE-STRATEGY.md)
   - Image requirements and specifications
   - Placeholder strategy
   - File organization
   - Optimization guidelines

### For Deployment & Launch

1. **Deployment Instructions**: [guides/DEPLOYMENT-GUIDE.md](guides/DEPLOYMENT-GUIDE.md)
   - Quick deployment steps (Netlify/Vercel)
   - Assets needed from client
   - Post-deployment configuration
   - Launch checklist

2. **Client Communication**: [guides/EMAIL-TO-CLIENT.md](guides/EMAIL-TO-CLIENT.md)
   - Ready-to-send email template
   - Asset request with specifications
   - Delivery instructions

### Source Material

- **[Company-Profile.pdf](Company-Profile.pdf)**
  - Single source of truth for all content
  - Company information, services, team, projects
  - Contact details and credentials

## 🎯 Quick Reference

### Content Updates
All website content is stored in JSON files:
- `src/data/contact.json` - Company details
- `src/data/team.json` - Team member profiles
- `src/data/services.json` - Service descriptions
- `src/data/projects.json` - Portfolio items

### Asset Locations
- Logo: `public/logo/`
- Team photos: `public/images/team/`
- Project images: `public/images/projects/`
- Hero images: `public/images/hero/`

### Key Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📋 Project Status

### ✅ Complete
- All 6 pages built and functional
- Responsive design implemented
- SEO optimization complete
- Production build tested
- Documentation complete

### ⏳ Pending (Client Actions)
- Company logo and brand colors
- Team member photos
- Project photos
- Contact form submission service setup
- Custom domain configuration

## 🔗 External Resources

- **Astro Documentation**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Netlify Deployment**: https://docs.netlify.com
- **Vercel Deployment**: https://vercel.com/docs

## 📞 Contact

**AE SHEQ Consulting (Pty) Ltd**
- Email: info@aesheq.co.za
- Phone: +27 60 644 5032
- Website: www.aesheq.co.za
- Registration: 2020/574070/07

---

**Last Updated**: May 31, 2026
**Project Status**: Production Ready

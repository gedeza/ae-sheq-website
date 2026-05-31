# AE SHEQ Consulting Website

Professional marketing website for **AE SHEQ Consulting (Pty) Ltd** - a leading SHEQ (Safety, Health, Environment & Quality) consulting firm based in Mokopane, South Africa.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server: `http://localhost:4321`

## 📁 Project Structure

```
ae-sheq-website/
├── DOCS/                      # 📚 All Documentation
│   ├── planning/              # Project planning documents
│   │   ├── SITE-PLAN.md      # Complete implementation plan
│   │   └── IMAGE-STRATEGY.md # Asset requirements & strategy
│   ├── guides/                # Setup and deployment guides
│   │   ├── DEPLOYMENT-GUIDE.md   # Step-by-step deployment
│   │   └── EMAIL-TO-CLIENT.md    # Asset request template
│   ├── assets/                # Documentation assets
│   └── Company-Profile.pdf    # Source of truth for content
├── src/
│   ├── components/            # Reusable Astro components
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Website pages (auto-routed)
│   ├── styles/                # Global styles
│   └── data/                  # Content data (JSON)
├── public/                    # Static assets
│   ├── images/                # Images (team, projects, etc.)
│   └── logo/                  # Company logo files
└── dist/                      # Production build output
```

## 📖 Documentation

### For Developers
- **[DEPLOYMENT-GUIDE.md](DOCS/guides/DEPLOYMENT-GUIDE.md)** - Complete deployment instructions
- **[SITE-PLAN.md](DOCS/planning/SITE-PLAN.md)** - Original implementation plan
- **[IMAGE-STRATEGY.md](DOCS/planning/IMAGE-STRATEGY.md)** - Asset specifications

### For Client
- **[EMAIL-TO-CLIENT.md](DOCS/guides/EMAIL-TO-CLIENT.md)** - Ready-to-send asset request

## ✅ What's Complete

- ✅ **6 Complete Pages** - Home, About, Services, Projects, Credentials, Contact
- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Production Ready** - Build tested and working
- ✅ **Easy to Edit** - JSON-based content management

## 🎨 Customization

### Update Content
All content is in JSON files in `src/data/`:
- `contact.json` - Company details, address, phone, email
- `team.json` - Team member profiles
- `services.json` - Service descriptions
- `projects.json` - Portfolio and client information

### Update Brand Colors
Edit `tailwind.config.cjs` to change the color palette.

### Add Images
- **Logo**: `public/logo/`
- **Team Photos**: `public/images/team/`
- **Project Images**: `public/images/projects/`

See [IMAGE-STRATEGY.md](DOCS/planning/IMAGE-STRATEGY.md) for detailed specifications.

## 🚀 Deployment

### Recommended: Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

See [DEPLOYMENT-GUIDE.md](DOCS/guides/DEPLOYMENT-GUIDE.md) for complete instructions.

## 🔧 Tech Stack

- **Astro 5.0** - Static site generator
- **Tailwind CSS 3.4** - Utility-first CSS
- **TypeScript** - Type safety

## 📞 Support

**AE SHEQ Consulting (Pty) Ltd**
- Email: info@aesheq.co.za
- Phone: +27 60 644 5032
- Website: www.aesheq.co.za
- Registration: 2020/574070/07

## 📄 License

© 2026 AE SHEQ Consulting (Pty) Ltd. All rights reserved.

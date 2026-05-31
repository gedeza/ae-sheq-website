# AE SHEQ Consulting Website

Professional marketing website for AE SHEQ Consulting (Pty) Ltd - a leading SHEQ (Safety, Health, Environment & Quality) consulting firm based in Mokopane, South Africa.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

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

The development server will start at `http://localhost:4321`

## 📁 Project Structure

```
ae-sheq-website/
├── public/                 # Static assets
│   ├── images/            # Images (logos, team photos, projects)
│   │   ├── hero/
│   │   ├── team/
│   │   ├── projects/
│   │   ├── about/
│   │   └── icons/
│   └── logo/              # Company logo files
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── ServiceCard.astro
│   │   ├── TeamMember.astro
│   │   └── ProjectCard.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Website pages (auto-routed)
│   │   ├── index.astro    # Home page
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── projects.astro
│   │   ├── credentials.astro
│   │   └── contact.astro
│   ├── styles/            # Global styles
│   │   └── global.css
│   └── data/              # Content data (JSON)
│       ├── contact.json
│       ├── team.json
│       ├── services.json
│       └── projects.json
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Updating Content

All content is stored in JSON files in `src/data/` for easy editing:

#### Contact Information (`src/data/contact.json`)
Update company details, address, phone, email, and business hours.

#### Team Members (`src/data/team.json`)
Add or modify team member profiles, qualifications, and registrations.

#### Services (`src/data/services.json`)
Update service descriptions, features, and categories.

#### Projects (`src/data/projects.json`)
Add new projects, update client information, and manage portfolio items.

### Updating Brand Colors

Edit `tailwind.config.cjs` to update the color palette:

```javascript
colors: {
  primary: {
    600: '#1e40af', // Main primary color
    // ... other shades
  },
  secondary: {
    600: '#059669', // Main secondary color
    // ... other shades
  },
  accent: {
    600: '#ea580c', // Main accent color
    // ... other shades
  }
}
```

### Adding Images

1. **Logo**: Replace files in `public/logo/`
   - `logo.svg` - Main logo
   - `logo-white.svg` - White version for dark backgrounds
   - `favicon.svg` - Browser favicon

2. **Team Photos**: Add to `public/images/team/`
   - Use format: `firstname-lastname.jpg`
   - Recommended size: 800x800px (square)
   - Update paths in `src/data/team.json`

3. **Project Images**: Add to `public/images/projects/`
   - Recommended size: 1200x800px (3:2 ratio)
   - Update paths in `src/data/projects.json`

4. **Hero Image**: Replace `public/images/hero/hero-bg.jpg`
   - Recommended size: 1920x1080px (landscape)

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Vercel

1. Push your code to GitHub/GitLab
2. Import project in Vercel
3. Vercel auto-detects Astro settings
4. Deploy!

### Manual Deployment

```bash
# Build the site
npm run build

# The `dist` folder contains your static site
# Upload contents to any static hosting service
```

## 📝 Content Editing Guide

### Adding a New Team Member

1. Add photo to `public/images/team/`
2. Edit `src/data/team.json`:

```json
{
  "id": 5,
  "name": "New Member Name",
  "role": "Position Title",
  "image": "/images/team/new-member.jpg",
  "qualifications": ["Qualification 1", "Qualification 2"],
  "registrations": ["Registration 1"],
  "experience": ["Experience area 1"],
  "email": "email@aesheq.co.za"
}
```

### Adding a New Project

Edit `src/data/projects.json` and add to the appropriate array:

```json
{
  "id": 20,
  "title": "Project Name",
  "client": "Client Name",
  "location": "Location",
  "category": "Category",
  "description": "Project description",
  "image": "/images/projects/project-name.jpg"
}
```

### Adding a New Service

Edit `src/data/services.json` within the appropriate category:

```json
{
  "id": "service-id",
  "name": "Service Name",
  "description": "Service description",
  "features": [
    "Feature 1",
    "Feature 2"
  ]
}
```

## 🔧 Technical Details

### Built With

- **Astro 6.4.2** - Static site generator
- **Tailwind CSS 4.1.0** - Utility-first CSS framework
- **TypeScript** - Type safety

### Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Fast loading times (<3s)
- ✅ Static site generation for optimal performance
- ✅ Easy content management via JSON files
- ✅ Professional design with SHEQ industry standards

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For technical support or questions about the website:

**AE SHEQ Consulting (Pty) Ltd**
- Email: info@aesheq.co.za
- Phone: +27 60 644 5032
- Website: www.aesheq.co.za

## 📄 License

© 2026 AE SHEQ Consulting (Pty) Ltd. All rights reserved.

Registration No: 2020/574070/07

---

## 🎯 Next Steps After Receiving Assets

1. **Replace Logo**
   - Add actual logo files to `public/logo/`
   - Update brand colors in `tailwind.config.cjs`

2. **Add Team Photos**
   - Replace placeholder images in `public/images/team/`
   - Ensure filenames match those in `src/data/team.json`

3. **Add Project Photos**
   - Add real project images to `public/images/projects/`
   - Update image paths in `src/data/projects.json`

4. **Update Hero Image**
   - Replace `public/images/hero/hero-bg.jpg` with professional image

5. **Configure Contact Form**
   - Set up form submission service (Netlify Forms, Formspree, etc.)
   - Update form action in `src/pages/contact.astro`

6. **Add Google Maps**
   - Get Google Maps embed code
   - Replace map placeholder in `src/pages/contact.astro`

7. **Test & Deploy**
   - Run `npm run build` to test production build
   - Deploy to hosting service
   - Configure custom domain (www.aesheq.co.za)

## 🔄 Maintenance

### Regular Updates

- Review and update project portfolio quarterly
- Keep team member information current
- Update service descriptions as offerings evolve
- Refresh testimonials (when available)

### Performance Monitoring

- Check Google PageSpeed Insights regularly
- Monitor Core Web Vitals
- Test on various devices and browsers

### Security

- Keep dependencies updated: `npm update`
- Review and update contact form spam protection
- Ensure SSL certificate is active on domain

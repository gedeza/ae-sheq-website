# AE SHEQ Consulting Website - Image & Asset Strategy

## Overview
This document outlines the placeholder strategy and image requirements for the AE SHEQ Consulting website development.

---

## Logo & Brand Colors

### Current Situation
The company profile PDF is text-only and does not contain extractable images or logo files. Therefore, we **cannot extract brand colors** from the provided document.

### Placeholder Strategy
**Temporary Brand Colors** (Professional SHEQ Industry Standard):
- **Primary Blue:** `#1E40AF` (Trust, professionalism, safety)
- **Secondary Green:** `#059669` (Environment, sustainability, health)
- **Accent Orange:** `#EA580C` (Safety alerts, CTAs, energy)
- **Neutral Gray:** `#64748B` (Text, backgrounds)
- **Dark:** `#0F172A` (Headers, footer)
- **Light:** `#F8FAFC` (Backgrounds, cards)

**These colors will be REPLACED** once the actual logo and brand guidelines are provided.

### Logo Placeholder
We will create a professional text-based logo placeholder:
```
AE SHEQ
CONSULTING
```
Styled with the temporary brand colors above, easily replaceable when the actual logo is provided.

---

## Image Requirements & Placeholders

### 1. Hero Section Images (Home Page)

**Required:** 1 high-quality hero background image

**Placeholder Strategy:**
- Professional abstract image representing safety/construction/industry
- Options:
  - Construction site with safety equipment (hard hats, safety vests)
  - Industrial facility with safety signage
  - Professional team conducting site inspection
  - Abstract geometric pattern in brand colors

**Specifications:**
- Dimensions: 1920x1080px minimum (landscape)
- Format: JPG or WebP (optimized for web)
- Style: Professional, slightly desaturated for text overlay
- Overlay: Dark gradient for text readability

**Source for Placeholder:**
- Unsplash/Pexels (royalty-free professional images)
- Keywords: "construction safety", "industrial safety", "safety inspection", "hard hat"

---

### 2. Team Member Photos

**Required:** 4 professional headshots

**Team Members:**
1. Mr. Simon Moletsane - Safety Specialist/Environmental Health & Safety Specialist
2. Ms. Gontse Langa - Environmental Health Practitioner
3. Ms. Mangale Cynthia Machethe - Construction Health and Safety Officer
4. Ms. Khensani Kekana - Health and Safety Officer

**Placeholder Strategy:**
- Professional avatar illustrations (gender-appropriate)
- Consistent style across all team members
- Professional business attire representation
- Neutral, professional color scheme

**Specifications:**
- Dimensions: 400x400px (square, 1:1 ratio)
- Format: PNG with subtle background or SVG
- Style: Professional, modern, approachable

**Source for Placeholder:**
- UI Avatars (generated professional avatars)
- Illustration libraries (unDraw, Humaaans)
- Professional avatar generators

**Replacement Instructions:**
When actual photos are provided:
- Same dimensions (400x400px minimum)
- Professional headshot or upper body
- Consistent lighting and background
- High resolution (800x800px preferred for retina displays)

---

### 3. Service Section Icons

**Required:** 4 main service category icons

**Services:**
1. **Safety** - Hard hat, shield, or safety badge icon
2. **Health** - Medical cross, heart, or health symbol
3. **Environment** - Leaf, globe, or recycling symbol
4. **Quality/Auditing** - Checklist, clipboard, or certification badge

**Placeholder Strategy:**
- Professional line icons or solid icons
- Consistent style (all line or all solid)
- Brand color scheme
- Scalable vector format

**Specifications:**
- Format: SVG (scalable, crisp at any size)
- Size: 64x64px base size
- Style: Modern, professional, simple
- Color: Primary brand color with hover effects

**Source for Placeholder:**
- Lucide Icons (open-source, professional)
- Heroicons (Tailwind's icon library)
- Feather Icons (minimal, clean)

---

### 4. Project/Portfolio Images

**Required:** 6-8 project showcase images (optional but recommended)

**Project Categories from Profile:**
- Construction/Infrastructure (City of Tshwane projects)
- Mining Operations (IvanPlants, Anglo American)
- Municipal Projects (Mogalakwena Municipality)
- Agriculture (Hatchery and Chicken Houses)
- Energy (Eskom projects)

**Placeholder Strategy:**
- Generic professional images representing each industry
- Consistent aspect ratio and styling
- Professional quality, not stock-photo obvious

**Specifications:**
- Dimensions: 800x600px (4:3 ratio) or 1200x800px (3:2 ratio)
- Format: JPG or WebP (optimized)
- Style: Professional, industrial, authentic
- Overlay: Optional dark overlay with project title

**Source for Placeholder:**
- Unsplash/Pexels (royalty-free)
- Keywords: "construction site", "mining operation", "industrial facility", "infrastructure project"

**Replacement Instructions:**
When actual project photos are provided:
- Ensure client permission for use
- Same aspect ratio for consistency
- High resolution (1200x800px minimum)
- Professional quality (not phone snapshots)

---

### 5. About Page Images

**Required:** 1-2 supporting images

**Options:**
- Team collaboration/meeting photo
- Office or field work environment
- Safety training session
- Site inspection in progress

**Placeholder Strategy:**
- Professional stock image showing teamwork/safety
- Diverse, professional representation
- Authentic, not overly staged

**Specifications:**
- Dimensions: 1200x800px (landscape)
- Format: JPG or WebP
- Style: Professional, authentic, engaging

---

### 6. Icons & UI Elements

**Required:** Various small icons throughout the site

**Categories:**
- Contact icons (phone, email, location)
- Social media icons (LinkedIn, Facebook, etc.)
- Feature/benefit icons
- Navigation icons (menu, close, arrow)
- Form icons (user, envelope, message)

**Placeholder Strategy:**
- Consistent icon library (Lucide Icons recommended)
- SVG format for scalability
- Brand color scheme
- Accessible (proper labels and ARIA attributes)

**Specifications:**
- Format: SVG
- Size: 24x24px base size (scalable)
- Style: Line icons, consistent stroke width
- Color: Inherit from parent or brand colors

---

### 7. Background Patterns/Textures

**Optional:** Subtle background elements

**Options:**
- Subtle grid pattern
- Geometric shapes
- Diagonal lines
- Abstract safety-themed patterns

**Placeholder Strategy:**
- Very subtle, low opacity
- Enhance visual interest without distraction
- Brand colors at 5-10% opacity

---

## Image Optimization Strategy

All images will be optimized for web performance:

1. **Format Selection:**
   - WebP for modern browsers (with JPG fallback)
   - SVG for icons and logos
   - PNG only when transparency is required

2. **Responsive Images:**
   - Multiple sizes for different screen sizes
   - Lazy loading for below-the-fold images
   - Proper `srcset` and `sizes` attributes

3. **Compression:**
   - JPG: 80-85% quality
   - WebP: 75-80% quality
   - PNG: Optimized with tools like TinyPNG

4. **Performance:**
   - Hero images: <200KB
   - Team photos: <50KB each
   - Icons: <5KB each (SVG)
   - Total page weight target: <1MB

---

## Accessibility Considerations

All images will include:
- Descriptive `alt` text
- Proper ARIA labels where needed
- Sufficient contrast for overlaid text
- Keyboard-accessible interactive images

---

## File Organization

```
public/
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg (or .webp)
│   ├── team/
│   │   ├── simon-moletsane.jpg (placeholder)
│   │   ├── gontse-langa.jpg (placeholder)
│   │   ├── cynthia-machethe.jpg (placeholder)
│   │   └── khensani-kekana.jpg (placeholder)
│   ├── projects/
│   │   ├── project-1.jpg (placeholder)
│   │   ├── project-2.jpg (placeholder)
│   │   └── ... (6-8 total)
│   ├── about/
│   │   └── team-collaboration.jpg (placeholder)
│   └── icons/
│       ├── safety.svg
│       ├── health.svg
│       ├── environment.svg
│       └── quality.svg
└── logo/
    ├── logo.svg (placeholder - text-based)
    ├── logo-white.svg (placeholder)
    └── favicon.ico (placeholder)
```

---

## Replacement Process

When actual assets are provided:

1. **Logo:**
   - Replace files in `public/logo/`
   - Update brand colors in `tailwind.config.cjs`
   - Regenerate favicon from new logo

2. **Team Photos:**
   - Replace files in `public/images/team/`
   - Maintain same filenames for automatic update
   - Optimize new images before upload

3. **Project Photos:**
   - Add to `public/images/projects/`
   - Update project data in `src/data/projects.json`
   - Ensure proper attribution if required

4. **Brand Colors:**
   - Update `tailwind.config.cjs` color palette
   - Colors will automatically apply throughout site
   - Test contrast ratios for accessibility

---

## Summary

**What We'll Use Initially:**
- ✅ Professional placeholder hero image (construction/safety theme)
- ✅ Professional avatar placeholders for team (4 members)
- ✅ Text-based logo placeholder "AE SHEQ CONSULTING"
- ✅ Industry-standard SHEQ color palette (blue/green/orange)
- ✅ Professional icon library (Lucide Icons)
- ✅ Generic project/industry images (6-8 images)

**What We Need from Client:**
- 🎯 **Priority 1:** Company logo (SVG/PNG) + Brand color codes
- 🎯 **Priority 2:** Team member professional photos (4 photos)
- 🎯 **Priority 3:** Project photos with client permission (6-8 photos)
- 🎯 **Optional:** Additional workplace/office photos

**Timeline:**
- **Phase 1:** Build with placeholders (Week 1-2)
- **Phase 2:** Replace with actual assets as received (Week 2-3)
- **Phase 3:** Final polish and optimization (Week 3-4)

All placeholders are designed to be easily replaceable without affecting the site structure or functionality.

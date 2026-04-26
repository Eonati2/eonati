# Eonati - Premium Logo Design Marketplace

Find elite Fiverr Pro branding talent faster.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
eonati/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── blog/
│   │   └── page.tsx        # Blog listing
│   ├── compare/
│   │   └── page.tsx        # Designer comparison
│   └── faq/
│       └── page.tsx        # FAQ page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer
├── scripts/
│   ├── pinterest_automation.py    # Pinterest posting (15 pins/day)
│   └── generate_video_pins.py     # Video pin generator
└── package.json
```

## 🎨 Design System

- **Background**: `#0B1020`
- **Primary Blue**: `#2563EB`
- **Accent Blue**: `#60A5FA`
- **Fonts**: Inter, Manrope
- **Style**: Apple x Stripe x Premium Agency

## 📌 Pinterest Automation

Run the Pinterest automation script:

```bash
cd scripts
python pinterest_automation.py
python generate_video_pins.py
```

Generates:
- 10 image pins/day
- 5 video pins/day
- Auto-scheduled at optimal times

## 🔗 Affiliate Links

This project promotes 3 Fiverr Pro designers:

1. **Alestra Agency** - Enterprise/Business
2. **Juhi/Explorance** - Startups/Minimalist
3. **Valeriia T** - Luxury/Premium

## 📊 Analytics

Add your GA4 tracking ID in `app/layout.tsx`:

```tsx
// Add Google Analytics script here
```

## 🚢 Deployment

Deployed to GitHub Pages at:
https://eonati2.github.io/eonati/

## 📝 License

MIT

---

**Eonati** © 2026 - Premium Logo Design Marketplace

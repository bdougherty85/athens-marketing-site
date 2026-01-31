# Athens School of Selling - Marketing Website

A professional marketing website for Pete Athens' sales training programs, featuring 4 gated content resources targeting medium to large businesses.

## Features

- **Professional Homepage**: Showcases Pete Athens' credentials and value proposition
- **4 Gated Resources**:
  1. Strategic Sales Opportunity Planning Guide
  2. The ALIGN Sales Methodology
  3. Pre-Call Planning Mastery Checklist
  4. Creating Unique Business Value Guide
- **Lead Capture**: Integrated with Google Sheets for automatic lead tracking
- **Email Validation**: Form validation for professional contact collection
- **Downloadable Content**: Comprehensive guides provided after form submission

## Quick Start

### Local Development

```bash
# Fix npm permissions if needed
sudo chown -R 501:20 "/Users/briandougherty/.npm"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Google Sheets Integration

### Current Setup

Leads are automatically captured to this Google Sheet:
https://docs.google.com/spreadsheets/d/1dXIGmsadQdPOK07F3CKeBW8v7pOYrreUb8MR3VYOKGI/edit?usp=sharing

### Data Format

Each lead includes:
- Timestamp
- Name
- Email
- Company
- Job Title
- Resource Downloaded

### Configuration

To use your own Google Sheet:

1. Update `src/services/googleSheets.ts`:
```typescript
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';
```

2. Ensure the sheet has these column headers:
   - Timestamp | Name | Email | Company | Title | Resource

### Fallback Storage

If Google Sheets API fails, leads are saved to browser localStorage as a backup.

## Project Structure

```
src/
├── pages/
│   ├── Homepage.tsx                    # Main landing page
│   └── resources/
│       ├── StrategicSalesGuide.tsx     # Resource 1
│       ├── AlignMethodology.tsx        # Resource 2
│       ├── PreCallPlanning.tsx         # Resource 3
│       └── UniqueBusinessValue.tsx     # Resource 4
├── components/
│   ├── GatedContentForm.tsx            # Reusable form
│   └── ResourcePageLayout.tsx          # Resource page template
├── services/
│   └── googleSheets.ts                 # Lead capture integration
├── App.tsx                             # Main app with routing
└── App.css                             # Global styles
```

## Content Overview

### 1. Strategic Sales Opportunity Planning Guide
- WHAT-SO WHAT-NOW WHAT framework
- Business Environment Analysis
- Competitive Strategy Selection
- Tactical Planning

### 2. The ALIGN Sales Methodology
- **A**sk: Strategic Questioning
- **L**isten: Active Listening
- **I**mplication: Explore Consequences
- **G**ain Agreement: Build Consensus
- **N**ext Steps: Clear Actions

### 3. Pre-Call Planning Mastery
- Purpose-Process-Payoff methodology
- Stakeholder analysis
- Motive identification
- Gap analysis

### 4. Creating Unique Business Value
- Three value areas: Safety & Reliability, Continuous Improvement, Innovation
- ROI business case development
- Differentiation strategies

## Technologies Used

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Zod** - Validation
- **Lucide React** - Icons

## Deployment

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Recommended Hosts

- **Vercel**: `npx vercel`
- **Netlify**: Drag `dist/` to Netlify Drop
- **GitHub Pages**: Push `dist/` to `gh-pages` branch

## Customization

### Update Branding

Edit `src/App.css`:
```css
:root {
  --primary: #1e40af;  /* Your brand color */
  --secondary: #3b82f6;
  --accent: #60a5fa;
}
```

### Add More Resources

1. Create new file in `src/pages/resources/YourResource.tsx`
2. Add route in `src/App.tsx`
3. Add resource card to homepage

## Support

For questions about Pete Athens' training programs:
[www.athensschoolofselling.com](https://www.athensschoolofselling.com)

## License

© Athens School of Selling. All rights reserved.

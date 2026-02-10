# Reliant Roofers - Professional Roofing Website

A comprehensive, professional Next.js web application for Reliant Roofers, a roofing business operating in the UK. Built with modern web technologies and best practices.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Contact Form**: Fully functional contact form with email integration using Resend
- **Service Pages**: 7 comprehensive service pages covering all roofing services
- **Gallery**: Portfolio showcase with filtering and lightbox functionality
- **Image Slider**: Interactive image slider on About page showcasing completed projects
- **Google Maps**: Interactive map showing service areas (London and surrounding areas)
- **Professional Design**: Traditional, trustworthy aesthetic with modern UX

## 📋 Pages

- **Home** (`/`) - Hero section, services preview, why choose us, trust indicators
- **About** (`/about`) - Company history, mission, values, certifications, image slider, and Google Maps
- **Services** - 7 individual service pages:
  - Pitched Roofing (`/services/pitched-roofing`)
  - Flat Roofing (`/services/flat-roofing`)
  - New Roofs & Construction (`/services/new-roofs-construction`)
  - Loft Conversions (`/services/loft-conversions`)
  - Repairs & Maintenance (`/services/repairs-maintenance`)
  - Additional Services (`/services/additional-services`)
  - Roofing Materials (`/services/roofing-materials`)
- **Gallery** (`/gallery`) - Portfolio showcase with category filtering
- **Contact** (`/contact`) - Contact form and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: Resend
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)
- **Maps**: Google Maps JavaScript API

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd reliant-roofers-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then edit `.env.local` and add your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key
   ADMIN_EMAIL=rishi.bhatia.office@gmail.com
   FROM_EMAIL=noreply@reliantroofers.co.uk
   SEND_CONFIRMATION_EMAIL=false
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Service Setup (Resend)

1. **Create a Resend account** at [https://resend.com](https://resend.com)
2. **Get your API key** from the Resend dashboard
3. **Verify your domain** or use Resend's test domain for development
4. **Add the API key** to your `.env.local` file

### Google Maps Setup

1. **Create a Google Cloud Project** at [https://console.cloud.google.com](https://console.cloud.google.com)
2. **Enable the Maps JavaScript API** in the API Library
3. **Create an API Key** in the Credentials section
4. **Restrict the API Key** (recommended):
   - Application restrictions: HTTP referrers
   - Add your domain(s): `yourdomain.com/*`, `*.yourdomain.com/*`
   - API restrictions: Restrict to "Maps JavaScript API"
5. **Add the API key** to your `.env.local` file as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
6. The map will appear on the About page showing London and surrounding areas

### Alternative: Using Nodemailer

If you prefer to use Nodemailer with SMTP instead of Resend:

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. Update `app/api/contact/route.ts` to use Nodemailer instead of Resend
3. Add SMTP configuration to `.env.local`:
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   ```

## 📁 Project Structure

```
reliant-roofers-web/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── gallery/
│   │   └── page.tsx               # Gallery page
│   ├── services/
│   │   ├── pitched-roofing/
│   │   ├── flat-roofing/
│   │   └── ...                    # Other service pages
│   ├── layout.tsx                 # Root layout with Header/Footer
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── sitemap.ts                 # Sitemap generation
│   └── robots.ts                  # Robots.txt
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Footer.tsx                 # Site footer
│   ├── ContactForm.tsx            # Contact form component
│   ├── ImageSlider.tsx            # Image slider component for About page
│   ├── GoogleMap.tsx              # Google Maps component
│   └── ServicePageLayout.tsx      # Reusable service page layout
├── lib/
│   └── email.ts                   # Email utility functions
├── public/
│   └── images/                    # Images directory (add your images here)
│       ├── logo.png               # Company logo
│       └── gallery/               # Gallery images
├── .env.local.example             # Environment variables template
└── package.json
```

## 🎨 Customization

### Adding Your Logo

1. Place your logo file in `public/images/logo.png`
2. Update `components/Header.tsx` to use the actual logo image instead of the placeholder

### Adding Gallery Images

1. Add your portfolio images to `public/images/gallery/`
2. Update the `galleryItems` array in `app/gallery/page.tsx` with your actual images

### Updating Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (structured data)

### Updating Service Content

Edit the individual service pages in `app/services/` to customize content, features, and processes.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push your code** to GitHub, GitLab, or Bitbucket
2. **Import your repository** to Vercel
3. **Add environment variables** in Vercel dashboard:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`
   - `SEND_CONFIRMATION_EMAIL`
4. **Deploy** - Vercel will automatically build and deploy your site

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- **Netlify**: Follow Next.js deployment guide
- **AWS Amplify**: Configure build settings for Next.js
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email functionality | Yes |
| `ADMIN_EMAIL` | Email address to receive contact form submissions | Yes |
| `FROM_EMAIL` | Verified email address in Resend | Yes |
| `SEND_CONFIRMATION_EMAIL` | Set to 'true' to send confirmation emails to users | No |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key for map display on About page | No (map will show placeholder if not provided) |

## 🧪 Testing

### Contact Form Testing

1. Fill out the contact form on `/contact`
2. Submit the form
3. Check your admin email for the submission
4. Verify form validation works correctly

### Responsive Design Testing

Test the website on:
- Mobile devices (320px - 768px)
- Tablets (768px - 1024px)
- Desktop (1024px+)

## 🔍 SEO Features

- **Meta Tags**: Optimized for all pages
- **Structured Data**: JSON-LD for local business
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Open Graph**: Social media sharing tags

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a client project. For modifications, please contact the project owner.

## 📄 License

Proprietary - All rights reserved

## 📞 Support

For questions or support, please contact:
- Email: rishi.bhatia.office@gmail.com
- Phone: +44 7552 386343

## 🎯 Future Enhancements

Potential features to consider:
- Blog section for SEO and content marketing
- Customer testimonials/reviews section
- Online quote calculator
- Live chat integration
- Appointment booking system
- Customer portal for project tracking

---

Built with ❤️ using Next.js and TypeScript

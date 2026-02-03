# Setup Guide - Reliant Roofers Website

This guide will walk you through setting up the Reliant Roofers website for development and production.

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- A Resend account (for email functionality) or SMTP server

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and configure the following:

### For Resend (Recommended)

```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=admin@reliantroofers.co.uk
FROM_EMAIL=noreply@reliantroofers.co.uk
SEND_CONFIRMATION_EMAIL=false
```

**Getting a Resend API Key:**
1. Sign up at [https://resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy and paste it into `.env.local`

**Verifying Your Domain in Resend:**
1. Go to Domains in Resend dashboard
2. Add your domain (e.g., `reliantroofers.co.uk`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)
5. Use your verified domain email in `FROM_EMAIL`

### For Development/Testing

If you don't have a verified domain yet, you can use Resend's test domain:
```env
FROM_EMAIL=onboarding@resend.dev
```

Note: Emails sent from `onboarding@resend.dev` will only work in development and won't be delivered to real email addresses.

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Test Contact Form

1. Navigate to `/contact`
2. Fill out the contact form
3. Submit the form
4. Check your `ADMIN_EMAIL` inbox for the submission

## Step 5: Customize Content

### Add Your Logo

1. Place your logo file in `public/images/logo.png`
2. Update `components/Header.tsx`:
   ```tsx
   <Image
     src="/images/logo.png"
     alt="Reliant Roofers Logo"
     width={150}
     height={50}
   />
   ```

### Add Gallery Images

1. Add your portfolio images to `public/images/gallery/`
2. Update `app/gallery/page.tsx` with your actual images:
   ```tsx
   const galleryItems = [
     { id: 1, title: 'Your Project', category: 'Pitched Roofing', image: '/images/gallery/your-image.jpg' },
     // ... more items
   ];
   ```

### Update Contact Information

Update contact details in:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - Structured data (JSON-LD)

### Update Service Content

Edit service pages in `app/services/` to customize:
- Service descriptions
- Features and benefits
- Process steps
- Images

## Step 6: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Step 7: Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`
   - `SEND_CONFIRMATION_EMAIL`
4. Deploy - Vercel will automatically build and deploy

### Deploy to Other Platforms

The app can be deployed to any platform supporting Next.js:
- **Netlify**: Follow Next.js deployment guide
- **AWS Amplify**: Configure for Next.js
- **Self-hosted**: Build with `npm run build` and run `npm start`

## Troubleshooting

### Contact Form Not Sending Emails

1. **Check Resend API Key**: Ensure your API key is correct in `.env.local`
2. **Verify Domain**: Make sure your domain is verified in Resend
3. **Check Email Address**: Ensure `FROM_EMAIL` uses a verified domain
4. **Check Console**: Look for errors in the browser console and server logs
5. **Test with Resend Dashboard**: Send a test email from Resend dashboard

### Images Not Loading

1. Ensure images are in the `public/` directory
2. Use paths starting with `/` (e.g., `/images/logo.png`)
3. Check file names match exactly (case-sensitive)

### Build Errors

1. Run `npm run build` locally to identify errors
2. Check TypeScript errors: `npx tsc --noEmit`
3. Check for missing dependencies: `npm install`

## Next Steps

- Add your actual logo and images
- Customize service content
- Update contact information
- Test all forms and links
- Set up analytics (Google Analytics, etc.)
- Configure custom domain
- Set up SSL certificate (usually automatic with Vercel)

## Support

For issues or questions:
- Check the [README.md](./README.md) for more information
- Review Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
- Resend documentation: [https://resend.com/docs](https://resend.com/docs)


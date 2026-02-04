# Netlify Setup Guide - Contact Form & Email Configuration

This guide will walk you through setting up your contact form and email functionality on Netlify.

## Prerequisites

1. **Resend Account** - Sign up at [https://resend.com](https://resend.com) (free tier available)
2. **Netlify Account** - Your site should already be connected to Netlify
3. **Domain** (optional but recommended) - For sending emails from your own domain

---

## Step 1: Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com) and sign up/login
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Give it a name (e.g., "Netlify Production")
5. Copy the API key (starts with `re_`)

**Important:** Keep this key secure and never commit it to your repository!

---

## Step 2: Configure Environment Variables in Netlify

1. **Go to your Netlify Dashboard**
   - Navigate to your site
   - Click on **Site settings** (or go to: Site → Site settings)

2. **Open Environment Variables**
   - In the left sidebar, click **Environment variables**
   - Click **Add a variable**

3. **Add the following environment variables:**

### Required Variables:

#### `RESEND_API_KEY`
- **Value:** Your Resend API key (e.g., `re_1234567890abcdef...`)
- **Scopes:** Select **All scopes** (or at least Production, Deploy previews, Branch deploys)
- **Description:** API key for Resend email service

#### `ADMIN_EMAIL`
- **Value:** `rishi.bhatia.office@gmail.com`
- **Scopes:** All scopes
- **Description:** Email address where contact form submissions will be sent

#### `FROM_EMAIL`
- **Value:** See options below ⬇️
- **Scopes:** All scopes
- **Description:** Email address that sends the emails

### Optional Variables:

#### `SEND_CONFIRMATION_EMAIL`
- **Value:** `true` or `false` (default: `false`)
- **Scopes:** All scopes
- **Description:** If set to `true`, users will receive a confirmation email after submitting the form

---

## Step 3: Configure FROM_EMAIL

You have **two options** for the `FROM_EMAIL`:

### Option A: Use Resend Test Domain (Quick Setup - For Testing)

**Value:** `onboarding@resend.dev`

**Pros:**
- ✅ Works immediately, no setup needed
- ✅ Good for testing

**Cons:**
- ❌ Emails may go to spam
- ❌ Not professional (shows "onboarding@resend.dev" as sender)
- ❌ Limited deliverability

### Option B: Use Your Own Domain (Recommended for Production)

**Value:** `noreply@royalroofworks.com` (or your domain)

**Steps to set up:**

1. **Add Domain in Resend:**
   - Go to Resend Dashboard → **Domains**
   - Click **Add Domain**
   - Enter your domain: `royalroofworks.com` (or your actual domain)
   - Click **Add**

2. **Add DNS Records:**
   - Resend will show you DNS records to add
   - Go to your domain registrar (IONOS, etc.)
   - Add the following DNS records:
     - **DKIM Record** (TXT record)
     - **SPF Record** (TXT record)
     - **DMARC Record** (TXT record) - Optional but recommended

3. **Verify Domain:**
   - Wait a few minutes for DNS propagation
   - Go back to Resend → Domains
   - Click **Verify** next to your domain
   - Status should change to "Verified" ✅

4. **Set FROM_EMAIL:**
   - Once verified, use: `noreply@royalroofworks.com` (or `rishi.bhatia.office@gmail.com`)
   - Add this to Netlify environment variables

---

## Step 4: Verify Netlify Configuration

1. **Check Build Settings:**
   - Go to **Site settings** → **Build & deploy** → **Build settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

2. **Trigger a New Deploy:**
   - After adding environment variables, trigger a new deploy:
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**
   - This ensures environment variables are loaded

---

## Step 5: Test the Contact Form

1. **Visit your live site** (e.g., `https://your-site.netlify.app`)
2. **Go to the Contact page**
3. **Fill out the form:**
   - Name
   - Email
   - Phone
   - Message
   - (Optional) Service interest
4. **Submit the form**
5. **Check your email:**
   - Check `rishi.bhatia.office@gmail.com` for the submission
   - If `SEND_CONFIRMATION_EMAIL=true`, check the user's email for confirmation

---

## Step 6: Troubleshooting

### Contact Form Not Working

**Check 1: Environment Variables**
- ✅ Go to Netlify → Site settings → Environment variables
- ✅ Verify all variables are set correctly
- ✅ Make sure scopes include "Production"

**Check 2: Resend API Key**
- ✅ Verify the API key is correct in Resend dashboard
- ✅ Make sure it hasn't been revoked
- ✅ Check API key starts with `re_`

**Check 3: Domain Verification (if using custom domain)**
- ✅ Go to Resend → Domains
- ✅ Verify domain shows "Verified" status
- ✅ Check DNS records are correct

**Check 4: Netlify Function Logs**
- ✅ Go to Netlify → Deploys
- ✅ Click on the latest deploy
- ✅ Check **Functions** tab for any errors
- ✅ Look for error messages related to Resend

**Check 5: Browser Console**
- ✅ Open browser DevTools (F12)
- ✅ Go to Console tab
- ✅ Submit the form and check for errors
- ✅ Go to Network tab and check the API request to `/api/contact`

### Common Errors

**Error: "Email service is not configured"**
- ❌ `RESEND_API_KEY` is missing or incorrect
- ✅ Add/update `RESEND_API_KEY` in Netlify environment variables
- ✅ Trigger a new deploy

**Error: "Failed to send email"**
- ❌ Domain not verified (if using custom domain)
- ❌ Invalid `FROM_EMAIL` address
- ✅ Verify domain in Resend
- ✅ Use verified domain email in `FROM_EMAIL`
- ✅ Check Resend dashboard for error details

**Error: "Invalid API key"**
- ❌ API key is incorrect or revoked
- ✅ Generate a new API key in Resend
- ✅ Update `RESEND_API_KEY` in Netlify

**Emails Going to Spam**
- ❌ Using `onboarding@resend.dev` (test domain)
- ❌ Domain not verified
- ✅ Use your verified domain email
- ✅ Set up SPF and DKIM records correctly
- ✅ Consider setting up DMARC record

---

## Step 7: Production Checklist

Before going live, ensure:

- [ ] `RESEND_API_KEY` is set in Netlify
- [ ] `ADMIN_EMAIL` is set to `rishi.bhatia.office@gmail.com`
- [ ] `FROM_EMAIL` uses your verified domain (not `onboarding@resend.dev`)
- [ ] Domain is verified in Resend
- [ ] DNS records (SPF, DKIM) are added and verified
- [ ] Test contact form submission works
- [ ] Test email delivery (check inbox and spam folder)
- [ ] `SEND_CONFIRMATION_EMAIL` is set if you want confirmation emails

---

## Quick Reference: Environment Variables Summary

| Variable | Required | Example Value | Description |
|----------|----------|---------------|-------------|
| `RESEND_API_KEY` | ✅ Yes | `re_1234567890...` | Resend API key |
| `ADMIN_EMAIL` | ✅ Yes | `rishi.bhatia.office@gmail.com` | Where form submissions go |
| `FROM_EMAIL` | ✅ Yes | `noreply@royalroofworks.com` | Sender email address |
| `SEND_CONFIRMATION_EMAIL` | ❌ No | `true` or `false` | Send confirmation to users |

---

## Additional Resources

- **Resend Documentation:** [https://resend.com/docs](https://resend.com/docs)
- **Resend Dashboard:** [https://resend.com/emails](https://resend.com/emails)
- **Netlify Environment Variables:** [https://docs.netlify.com/environment-variables/overview/](https://docs.netlify.com/environment-variables/overview/)
- **Next.js API Routes:** [https://nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

## Support

If you encounter issues:

1. Check Netlify function logs for errors
2. Check Resend dashboard for email delivery status
3. Verify all environment variables are set correctly
4. Ensure domain is verified (if using custom domain)
5. Test with a simple email first before using the contact form

---

**Last Updated:** Based on current codebase configuration
**Contact Form API Route:** `/app/api/contact/route.ts`


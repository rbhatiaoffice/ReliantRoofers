# Domain Setup Guide - IONOS to Netlify

This guide will help you connect your IONOS domain to your Netlify deployment.

## Prerequisites

- IONOS account with domain access
- Netlify account with site deployed
- Access to IONOS DNS management

## Step-by-Step Instructions

### Step 1: Add Domain in Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Select your site (Reliant Roofers)
3. Go to **Site configuration** → **Domain management**
4. Click **Add custom domain**
5. Enter your domain:
   - For root domain: `reliantroofers.co.uk`
   - For www subdomain: `www.reliantroofers.co.uk`
6. Click **Verify**

### Step 2: Get DNS Records from Netlify

After adding the domain, Netlify will display the DNS records you need to configure:

**Option A: Using A Record (Root Domain)**
- Type: `A`
- Name: `@` (or leave blank in IONOS)
- Value: Netlify's IP address (usually `75.2.60.5` or similar - Netlify will show the exact value)

**Option B: Using CNAME (Recommended for subdomains)**
- Type: `CNAME`
- Name: `www`
- Value: Your Netlify site URL (e.g., `your-site-name.netlify.app`)

### Step 3: Configure DNS in IONOS

1. Log in to [IONOS](https://www.ionos.com)
2. Navigate to **Domains & SSL** → Select your domain → **DNS**
3. Click **Add record** or edit existing records

#### For Root Domain (reliantroofers.co.uk):

**If using A Record:**
- **Type**: A
- **Name**: `@` (or leave blank)
- **Value**: The IP address provided by Netlify
- **TTL**: 3600 (or default)

**If using CNAME (some registrars allow this):**
- **Type**: CNAME
- **Name**: `@` (or leave blank)
- **Value**: `your-site-name.netlify.app`

#### For WWW Subdomain (www.reliantroofers.co.uk):

- **Type**: CNAME
- **Name**: `www`
- **Value**: `your-site-name.netlify.app`
- **TTL**: 3600 (or default)

### Step 4: Remove Conflicting Records

If you have existing A or CNAME records pointing elsewhere, remove or update them:
- Remove any old A records pointing to other IPs
- Remove any old CNAME records pointing to other domains

### Step 5: Verify DNS Propagation

1. Wait 5-10 minutes after making changes
2. Check DNS propagation using:
   - [whatsmydns.net](https://www.whatsmydns.net)
   - [dnschecker.org](https://dnschecker.org)
3. Enter your domain and check if it points to Netlify's servers

### Step 6: SSL Certificate (Automatic)

1. Once DNS is verified, Netlify will automatically provision an SSL certificate
2. This usually happens within a few minutes to a few hours
3. You'll see a green checkmark in Netlify's domain settings when SSL is active
4. Your site will be accessible via HTTPS automatically

### Step 7: Set Primary Domain (Optional)

1. In Netlify, go to **Domain management**
2. Click **Options** next to your domain
3. Select **Set as primary domain** for the domain you want as the main one
4. Netlify will automatically redirect other domains to the primary

## Troubleshooting

### DNS Not Propagating

- **Wait longer**: DNS changes can take up to 48 hours (usually 1-2 hours)
- **Check TTL**: Lower TTL values help with faster updates
- **Clear DNS cache**: 
  - Windows: `ipconfig /flushdns`
  - Mac/Linux: `sudo dscacheutil -flushcache`

### SSL Certificate Not Issuing

- Ensure DNS is fully propagated
- Check that your domain is correctly pointing to Netlify
- Wait up to 24 hours for Let's Encrypt certificate issuance
- Contact Netlify support if issues persist after 24 hours

### Domain Not Resolving

- Verify DNS records are correct in IONOS
- Check for typos in the domain name or Netlify URL
- Ensure you're using the correct record type (A vs CNAME)
- Some registrars don't allow CNAME on root domain - use A record instead

### Mixed Content Issues

- Ensure all resources use HTTPS
- Check that your site's internal links use relative paths or HTTPS URLs

## Important Notes

- **DNS Propagation**: Changes can take time. Be patient!
- **SSL Certificate**: Netlify provides free SSL certificates via Let's Encrypt
- **HTTPS Redirect**: Netlify automatically redirects HTTP to HTTPS
- **Subdomain**: You can add both `reliantroofers.co.uk` and `www.reliantroofers.co.uk`

## IONOS-Specific Tips

- IONOS DNS interface may vary slightly - look for "DNS" or "DNS Records" section
- If you can't find DNS settings, contact IONOS support
- Some IONOS plans may have DNS management in different locations
- IONOS may require you to unlock the domain before making changes

## Verification Checklist

- [ ] Domain added in Netlify
- [ ] DNS records configured in IONOS
- [ ] DNS propagated (checked via whatsmydns.net)
- [ ] SSL certificate issued (green checkmark in Netlify)
- [ ] Site accessible via custom domain
- [ ] HTTPS working correctly
- [ ] www subdomain redirects correctly (if configured)

## Need Help?

- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **IONOS Support**: Contact through your IONOS account
- **DNS Issues**: Check Netlify's domain troubleshooting guide

---

**Last Updated**: Based on current Netlify and IONOS interfaces (2024)


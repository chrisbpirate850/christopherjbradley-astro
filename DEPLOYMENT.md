# Deployment Guide - Christopher J. Bradley Astro Site

## Quick Deploy to Netlify (Recommended - 5 minutes)

### Step 1: Push to GitHub

```bash
cd christopherjbradley-astro
git init
git add .
git commit -m "Initial Astro site for christopherjbradley.com"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/christopherjbradley-astro.git
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and select your repository
4. Netlify auto-detects Astro settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Add Custom Domain

1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `christopherjbradley.com`
4. Follow DNS instructions to point domain to Netlify

### Step 4: Enable HTTPS

Netlify automatically provisions free SSL certificates. Wait 1-2 minutes after DNS propagation.

---

## Alternative: Deploy to Vercel

### Quick Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd christopherjbradley-astro
vercel

# Follow prompts
# Add custom domain in Vercel dashboard
```

---

## Alternative: Deploy to Cloudflare Pages

### Via Dashboard

1. Go to https://pages.cloudflare.com
2. Click "Create a project"
3. Connect GitHub repository
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

### Add Custom Domain

1. Go to "Custom domains"
2. Add `christopherjbradley.com`
3. Cloudflare handles DNS automatically if domain is on Cloudflare

---

## Before Deploying - Add Images

Copy these images from the Next.js site to `public/images/`:

```bash
# From christopherjbradley-com/public/images/
cp ../christopherjbradley-com/public/images/christopher-bradley.jpg public/images/
cp "../christopherjbradley-com/public/images/front of love everyone letter.jpg" public/images/
cp "../christopherjbradley-com/public/images/back of lover everyone letter.jpg" public/images/
```

Then update the site to use these images by adding image references to pages.

---

## Environment Variables (if needed)

If you add any environment variables later:

### Netlify
1. Go to Site settings → Environment variables
2. Add variables

### Vercel
1. Go to Settings → Environment Variables
2. Add variables

### Cloudflare Pages
1. Go to Settings → Environment variables
2. Add variables

---

## DNS Configuration

### If Using Netlify

**Option A: Netlify DNS (Easiest)**
1. Transfer domain nameservers to Netlify
2. Netlify handles everything

**Option B: External DNS**
Add these records to your DNS provider:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR-SITE.netlify.app
```

### If Using Vercel

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### If Using Cloudflare Pages

Cloudflare handles this automatically if your domain uses Cloudflare DNS.

---

## Post-Deployment Checklist

- [ ] Site loads at custom domain
- [ ] HTTPS is working (green padlock)
- [ ] All pages accessible (/, /about, /projects, /contact)
- [ ] Mobile navigation works
- [ ] Links to external platforms work
- [ ] Sitemap accessible at /sitemap-index.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] Test on mobile device
- [ ] Test in AI assistant (ask Claude about your site)

---

## Testing AI Discoverability

After deployment, test that AI can read your site:

1. Go to Claude.ai
2. Ask: "What can you tell me about christopherjbradley.com?"
3. Claude should be able to read and understand the content

This will confirm the site is properly structured for AI discovery!

---

## Automatic Deployments

Once connected to GitHub, all three platforms (Netlify/Vercel/Cloudflare) will:
- Auto-deploy on every `git push` to main branch
- Build previews for pull requests
- Send notifications on deploy success/failure

To deploy updates:
```bash
git add .
git commit -m "Update content"
git push
```

Site automatically rebuilds and deploys!

---

## Build Settings Reference

All three platforms need these settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or higher (usually auto-detected)

---

## Troubleshooting

### Build Fails

Check build logs for errors. Common issues:
- Missing dependencies: Run `npm install`
- Node version: Ensure Node 18+
- TypeScript errors: Run `npm run build` locally first

### Site Not Loading

- Check DNS propagation: https://dnschecker.org
- Verify custom domain settings in hosting dashboard
- Check SSL certificate status

### Images Not Loading

- Ensure images are in `public/images/` directory
- Check file names match exactly (case-sensitive)
- Verify images were included in git commit

---

## Support

- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Astro**: https://docs.astro.build

---

## Estimated Timeline

- **Add images**: 2 minutes
- **Push to GitHub**: 2 minutes
- **Deploy**: 3-5 minutes
- **DNS propagation**: 1-24 hours (usually < 1 hour)

**Total**: ~30 minutes active work, then wait for DNS.

---

Ready to deploy? Start with Netlify for the easiest experience!

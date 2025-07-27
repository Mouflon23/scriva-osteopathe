# GitHub Pages Deployment Guide

This guide will help you deploy your Scriva Osteopathe website to GitHub Pages with support for custom domains.

## Prerequisites

1. Make sure your project is pushed to a GitHub repository
2. Ensure you have the necessary permissions to enable GitHub Pages
3. For custom domain: Have a domain name registered with a DNS provider

## Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment. Here's how to set it up:

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 2. Enable GitHub Actions

1. Go to your repository's "Actions" tab
2. You should see the "Deploy to GitHub Pages" workflow
3. Click on it and click "Run workflow" if needed
4. The workflow will automatically run on every push to the main branch

## Custom Domain Setup

### 1. Configure Custom Domain in GitHub

1. Go to your repository's "Settings" → "Pages"
2. In the "Custom domain" field, enter your domain (e.g., `yourdomain.com`)
3. Check "Enforce HTTPS" if available
4. Click "Save"

### 2. Update CNAME File

1. Edit the `public/CNAME` file in your project
2. Replace the placeholder with your actual domain name
3. Commit and push the changes

### 3. DNS Configuration

Configure your DNS records with your domain provider:

#### Option A: Apex Domain (yourdomain.com)

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

#### Option B: Subdomain (www.yourdomain.com)

```
Type: CNAME
Name: www
Value: [your-username].github.io
```

### 4. Verify DNS Propagation

After updating DNS, it may take up to 24 hours for changes to propagate. You can check using:

- `dig yourdomain.com` (for apex domain)
- `dig www.yourdomain.com` (for subdomain)

## Manual Deployment

If you prefer manual deployment:

1. Install gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy manually:
   ```bash
   npm run deploy
   ```

## Configuration

- The site uses relative paths (`base: './'`) for compatibility with custom domains
- Build output goes to the `dist` folder
- GitHub Actions automatically builds and deploys on main branch pushes
- CNAME file is automatically included in the build

## Accessing Your Site

- **GitHub Pages URL**: `https://[your-username].github.io/scriva-osteopathe/`
- **Custom Domain**: `https://yourdomain.com` (after setup)

## Troubleshooting

### Custom Domain Issues

- Ensure DNS records are correctly configured
- Check that CNAME file contains the correct domain
- Verify DNS propagation using online tools
- Wait up to 24 hours for DNS changes to take effect

### General Issues

- If the site doesn't load, check that GitHub Pages is enabled in repository settings
- Ensure the gh-pages branch exists and contains the built files
- Check GitHub Actions logs for any build errors
- Verify HTTPS is enabled for custom domains

## SSL/HTTPS

GitHub Pages automatically provides SSL certificates for custom domains. Make sure to:

1. Check "Enforce HTTPS" in GitHub Pages settings
2. Wait for the SSL certificate to be provisioned (can take up to 24 hours)
3. Test both HTTP and HTTPS versions of your site

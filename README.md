# Ridekro Legal Pages

Public-facing legal and compliance pages for **Ridekro** — India's local ride booking platform.
Hosted via GitHub Pages. No build tools required — pure HTML, CSS, and JS.

---

## 📁 Folder Structure

```
ridekro-legal/
├── index.html           → Landing page with hero, features, and legal links
├── privacy-policy.html  → Full privacy policy (Play Store + Razorpay compliant)
├── terms.html           → Terms of Service (riders, drivers, payments, disputes)
├── support.html         → Support center with FAQ and contact info
├── delete-account.html  → Account deletion request page (Play Store required)
├── style.css            → Shared stylesheet for all pages
├── script.js            → Shared JS (mobile nav, FAQ accordion, active links)
└── README.md            → This file
```

---

## 🚀 How to Upload to GitHub and Enable GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `ridekro-legal` (or `ridekro.github.io` if you want it at the root domain)
4. Set visibility to **Public**
5. Do NOT initialise with a README (you already have one)
6. Click **Create repository**

### Step 2 — Upload Your Files

**Option A — Using GitHub's web interface (easiest):**

1. Open your new repository on GitHub
2. Click **"uploading an existing file"** or drag and drop
3. Select all files from the `ridekro-legal/` folder:
   - `index.html`
   - `privacy-policy.html`
   - `terms.html`
   - `support.html`
   - `delete-account.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Add a commit message like `Initial commit: legal pages`
5. Click **Commit changes**

**Option B — Using Git CLI:**

```bash
cd ridekro-legal
git init
git add .
git commit -m "Initial commit: Ridekro legal pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ridekro-legal.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1–2 minutes, then your site will be live at:

```
https://YOUR_USERNAME.github.io/ridekro-legal/
```

---

## 🌐 Using a Custom Domain (ridekro.in)

If you want the pages at `https://ridekro.in` or `https://legal.ridekro.in`:

1. In GitHub Pages settings, enter your custom domain
2. Add a `CNAME` file to the repo root with your domain:
   ```
   ridekro.in
   ```
3. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   - For apex domain (`ridekro.in`): Add 4 A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For subdomain (`legal.ridekro.in`): Add a CNAME record:
     ```
     legal → YOUR_USERNAME.github.io
     ```
4. Enable **Enforce HTTPS** in GitHub Pages settings after DNS propagates (can take up to 24 hours)

---

## ✏️ How to Update Pages Later

### Editing via GitHub Web Interface

1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g., `privacy-policy.html`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down, add a commit message, and click **Commit changes**
6. Changes go live within 1–2 minutes

### Editing via Git CLI

```bash
# Make your changes locally, then:
git add .
git commit -m "Update: [describe what you changed]"
git push
```

### What to Update and When

| Page | Update When |
|------|-------------|
| `privacy-policy.html` | Adding new data types, new third-party services, or policy changes |
| `terms.html` | Changing commission rates, adding new rules, or legal requirement changes |
| `support.html` | Updating FAQ, changing response times, or adding new contact channels |
| `delete-account.html` | Changing the deletion process or retention periods |
| `index.html` | Updating stats, adding new features, or changing the app store link |

**Always update the "Last Updated" date** at the top of `privacy-policy.html` and `terms.html` when making changes.

---

## 🔗 URLs to Submit for Play Store & Razorpay

Once live, use these URLs:

| Purpose | URL |
|---------|-----|
| Privacy Policy (Play Store) | `https://YOUR_DOMAIN/privacy-policy.html` |
| Terms of Service | `https://YOUR_DOMAIN/terms.html` |
| Support / Contact | `https://YOUR_DOMAIN/support.html` |
| Account Deletion (Play Store) | `https://YOUR_DOMAIN/delete-account.html` |
| Homepage | `https://YOUR_DOMAIN/` |

---

## ✅ Play Store Compliance Checklist

- [x] Privacy Policy URL — covers location, phone, payments, third parties
- [x] Account deletion page — permanent deletion + data retention explained
- [x] Support contact — email with response time commitment
- [x] Terms of Service — rider/driver rules, payments, governing law (India)
- [x] Data handling — Supabase, Razorpay, Expo, OpenStreetMap all disclosed
- [x] Children's policy — 18+ only, no minor data collection
- [x] Mobile responsive — works on all screen sizes

---

## 🎨 Customisation

- **Brand colours**: Edit CSS variables at the top of `style.css` (`:root` block)
- **Company name**: Search and replace `Ridekro Technologies` across all files
- **Support email**: Search and replace `pawadeshlok@gmail.com` across all files
- **Stats on homepage**: Edit the `.hero-stats` section in `index.html`
- **FAQ questions**: Edit the `.faq-item` blocks in `support.html`

---

*Built for Ridekro Technologies — Made in India 🇮🇳*

# Flavour Bites Canada Flagship

A premium Next.js/Vercel redesign for flavourbites.ca.

## Strategy
- `.ca` = Canadian café experience, Edmonton location, live Talech ordering, Canadian franchise growth.
- `.us` = U.S. retail products, One Stop Halal purchase path, U.S. franchise growth.
- No duplicated static menu. "Order online" goes to the live Talech microsite.

## Required images

Copy these files from the existing `D:\Flavourbites\public\images` folder into this project's `public\images` folder:

- `logo.png`
- `franchise-store.png`
- `franchise-storefront.png`
- `franchise-counter.png`
- `franchise-product.png`
- `turmeric-label.png`
- `matcha-label.png`
- `chocolate-packaging.png`
- `gift-box-design.png`

The site intentionally reuses authentic Canadian operating-store photography and the retail product assets already used by the U.S. brand.

## Run locally

```powershell
cd D:\flavourbites-ca
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```powershell
npm run build
```

## Recommended GitHub / Vercel flow

Create a new repository, recommended name:

`flavourbites-ca`

Then:

```powershell
git init
git add -A
git commit -m "feat: launch Flavour Bites Canada flagship"
git branch -M main
git remote add origin https://github.com/ajmerican/flavourbites-ca.git
git push -u origin main
```

Import the repository into Vercel. Use the Vercel preview URL until the replacement is fully approved. Do **not** move `flavourbites.ca` from the current live website until the new deployment is signed off.

## Current operational links

Live ordering:
https://microsite.talech.com/ordering/TUTTI-FRUTTI-DESSERT-CAFE-EDMONTON-AB/KVAzewZD0MRYgB85

U.S. storefront:
https://flavourbites.us

## Before final cutover

- Verify all images.
- Verify Talech "Order online" buttons.
- Verify phone/address.
- Review Canadian franchise legal copy with franchise counsel before accepting fees or signing agreements.
- Create branded Canadian email addresses later (recommended: `hello@flavourbites.ca`, `franchise@flavourbites.ca`).
- When ready, connect `flavourbites.ca` and `www.flavourbites.ca` to the new Vercel project.

# Vercel Deployment Guide

## Konfigurasi yang Sudah Dibuat

1. **vercel.json** - File konfigurasi Vercel
2. **package.json** - Ditambahkan build scripts

## Cara Deploy ke Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Import Project**
   - Buka [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import dari GitHub repository: `aditiaNovember01/mobilelegendtour`

2. **Configure Project**
   - Framework Preset: **Other**
   - Build Command: `npm run build` atau `expo export -p web`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (jika diperlukan)
   - Tidak ada environment variables yang diperlukan untuk saat ini

4. **Deploy**
   - Click "Deploy"
   - Tunggu proses build selesai

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## Troubleshooting

### Error: "Missing authorization check"
Ini adalah warning dari Vercel Agent, bukan error deployment. Abaikan saja.

### Build Error
Jika ada error saat build:

1. **Test build locally first:**
   ```bash
   npm run build
   ```

2. **Check output:**
   - Pastikan folder `dist` terbuat
   - Pastikan ada file `index.html` di dalam `dist`

3. **Common fixes:**
   - Clear cache: `rm -rf node_modules && npm install`
   - Update dependencies: `npm update`

### Deployment Checklist

- [x] vercel.json created
- [x] Build scripts added to package.json
- [x] Code pushed to GitHub
- [ ] Import project to Vercel
- [ ] Configure build settings
- [ ] Deploy

## Post-Deployment

Setelah deploy berhasil, Vercel akan memberikan URL seperti:
- Production: `https://mobilelegendtour.vercel.app`
- Preview: `https://mobilelegendtour-xxx.vercel.app`

## Custom Domain (Optional)

Untuk menggunakan custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records sesuai instruksi Vercel

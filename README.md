# Sükun — App Store Web Pages (GitHub Pages)

Bu klasör, App Store Connect’te kullanılacak statik URL sayfalarını içerir.

## Dosyalar
- `index.html` — Landing / Marketing
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Use
- `support.html` — Support / FAQ
- `assets/styles.css` — stil dosyası
- `assets/app.js` — dil toggle + aktif menü

## GitHub Pages yayınlama
1. Bu klasörü repo içinde `web/` olarak tutabilirsin.
2. GitHub’da:
   - Repository → **Settings** → **Pages**
   - **Build and deployment** altında:
     - Source: **Deploy from a branch**
     - Branch: `main` (veya kullandığın branch)
     - Folder: 
       - Eğer Pages root destekliyorsa: `/web`
       - Alternatif: `web/` içeriğini repo root’una veya `/docs` klasörüne taşıyıp onu seç.
3. Yayınlandıktan sonra base URL şöyle olur:
   - `https://<username>.github.io/<repo>/`

> Not: Bu dosyalarda `YOUR_GITHUB_PAGES_URL` placeholder’ı bulunur. Yayın URL’in belli olunca güncelleyebilirsin.

## App Store Connect URL eşlemesi
- **Privacy Policy URL** → `.../privacy.html`
- **Terms of Use URL** → `.../terms.html`
- **Support URL** → `.../support.html`
- **Marketing URL** → `.../index.html`

## Support email
- `sukunnamazapp@gmail.com`

## Dil
- Sayfalar TR/EN içerir.
- Sağ üstteki TR/EN toggle ile değiştirilebilir.

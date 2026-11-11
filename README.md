# DIGIBU Technologies Private Limited — Corporate Website

Official corporate digital platform for **DIGIBU Technologies Private Limited**.
> *"Your Next Digital Evolution."*  
> **TECHNOLOGY • DIGITAL GROWTH • CREATIVE • MEDIA • STAFFING**

---

## 🌟 Brand & Visual Identity

- **Deep Black:** `#080609`
- **Dark Purple:** `#18002B`
- **Brand Purple:** `#5700A8`
- **Vibrant Purple:** `#7900E8`
- **Signature Yellow:** `#FFD500`
- **White:** `#FFFFFF`
- **Soft Grey:** `#B8B3C0`

Official brand logo assets extracted and optimized directly from source vector/high-res master artwork (`IMG_8878.PNG`).

---

## 🏛️ Website Architecture & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Immersive hero with interactive particle mesh, split introduction, 5 division cards, 7 integrated packages, why DIGIBU, and 9-step timeline. |
| `/about` | **About Us** | Corporate profile, overarching objective, five-division structure, and strategic governance. |
| `/services` | **Services Overview** | Directory of all 5 divisions with quick-jump anchors and full capability breakdown. |
| `/services/it` | **01 — DIGIBU IT** | Websites, software, CRM/ERP, mobile applications (iOS/Android), UI/UX, and IT consulting. |
| `/services/digital` | **02 — DIGIBU Digital** | Social media management, SEO audits, Google/Meta paid ads, B2B/B2C lead gen, content marketing, and WhatsApp workflows. |
| `/services/creative` | **03 — DIGIBU Creative** | Brand identity, logo design, corporate graphic design, brochures, pitch decks, packaging, and advertising design. |
| `/services/media` | **04 — DIGIBU Media** | Podcast production, product photography, corporate videography, Instagram reels, real estate walkthroughs, and post-production. |
| `/services/staffing` | **05 — DIGIBU Staffing** | IT/Non-IT recruitment, talent sourcing, candidate screening, permanent/contract staffing, and RPO. |
| `/solutions` | **Integrated Solutions** | The 7 multi-division bundled packages with interactive filters and cross-division synergy matrix. |
| `/process` | **Our Process** | 9-step client engagement workflow, commercial models, and service engagement principles. |
| `/contact` | **Contact Us** | Fully functioning enquiry form with validation, preferred contact method, and real backend storage. |
| `/privacy` | **Privacy Policy** | Data protection, marketing consent compliance, and candidate data confidentiality. |

---

## 🚀 Running the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Environment
```bash
npm run dev:client
```
The website will be available at **`http://localhost:5173`**.

To run both client and standalone Express server concurrently:
```bash
npm run dev
```

### 3. Production Build & Start
```bash
npm run build
npm run server
```

---

## ⚙️ Environment Configuration

You can configure official contact details using a `.env` file in the root directory:

```env
VITE_CONTACT_EMAIL="contact@digibu.com"
VITE_CONTACT_PHONE="+91 98765 43210"
VITE_CONTACT_ADDRESS="DIGIBU Technologies Private Limited, Corporate Office, India"
PORT=5001
```

---

## 📡 API Endpoints

- **`GET /api/health`**: Health check and server status.
- **`POST /api/contact`**: Validates client enquiry, assigns a unique Reference ID, and records it securely in `server/data/inquiries.json`.
- **`GET /api/inquiries`**: Internal endpoint returning recorded inquiries.

---

© 2026 DIGIBU Technologies Private Limited. All rights reserved.

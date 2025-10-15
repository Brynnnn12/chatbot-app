# FakeGroq - AI Chat Application 🤖

Aplikasi chat AI modern berbasis web yang menggunakan Groq API (Llama 3.3 70B) dengan React frontend dan Node.js backend. Aplikasi ini memungkinkan pengguna untuk berkomunikasi dengan AI secara real-time dengan antarmuka yang responsive dan modern.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Konfigurasi](#-konfigurasi)
- [Cara Menjalankan](#-cara-menjalankan)
- [Struktur Project](#-struktur-project)
- [API Documentation](#-api-documentation)
- [Troubleshooting](#-troubleshooting)

## 🎯 Fitur Utama

✅ **Chat Real-time dengan AI** - Berkomunikasi dengan Groq AI (Llama 3.3 70B model)  
✅ **Manajemen Riwayat Chat** - Simpan dan kelola percakapan Anda  
✅ **Responsive Design** - Tampil sempurna di mobile, tablet, dan desktop  
✅ **Modern UI/UX** - Antarmuka yang bersih dan intuitif menggunakan Shadcn UI  
✅ **Rate Limiting** - Pembatasan request per IP untuk mencegah abuse  
✅ **Error Handling** - Penanganan error yang baik di frontend dan backend  
✅ **Loading States** - Indikator loading saat AI sedang memproses  
✅ **Auto-scroll** - Chat otomatis scroll ke pesan terbaru  
✅ **Typing Indicator** - Animasi saat AI sedang mengetik

## 🛠️ Teknologi yang Digunakan

### Backend (Node.js + Express)

| Package                   | Versi   | Fungsi                                                |
| ------------------------- | ------- | ----------------------------------------------------- |
| **express**               | ^5.1.0  | Framework web untuk Node.js                           |
| **@ai-sdk/groq**          | ^2.0.24 | SDK untuk integrasi Groq AI                           |
| **ai**                    | ^5.0.71 | Library AI toolkit dari Vercel                        |
| **cors**                  | ^2.8.5  | Middleware untuk handling CORS                        |
| **dotenv**                | ^17.2.3 | Memuat environment variables dari .env                |
| **express-async-handler** | ^1.2.0  | Wrapper untuk async/await di Express                  |
| **nodemon**               | ^3.1.11 | Auto-restart server saat development (dev dependency) |

### Frontend (React + Vite)

| Package               | Versi    | Fungsi                               |
| --------------------- | -------- | ------------------------------------ |
| **react**             | ^19.1.1  | Library UI untuk membangun komponen  |
| **react-dom**         | ^19.1.1  | React renderer untuk DOM             |
| **react-router-dom**  | ^7.9.3   | Routing untuk React aplikasi         |
| **vite**              | ^7.1.7   | Build tool dan dev server yang cepat |
| **tailwindcss**       | ^4.1.14  | Utility-first CSS framework          |
| **@tailwindcss/vite** | ^4.1.14  | Plugin Vite untuk Tailwind           |
| **lucide-react**      | ^0.545.0 | Icon library yang modern             |

#### Shadcn UI Components

| Component                         | Fungsi                                  |
| --------------------------------- | --------------------------------------- |
| **@radix-ui/react-avatar**        | Komponen avatar untuk user/AI           |
| **@radix-ui/react-dropdown-menu** | Menu dropdown                           |
| **@radix-ui/react-scroll-area**   | Area scrollable dengan custom scrollbar |
| **@radix-ui/react-separator**     | Pembatas visual antar section           |
| **@radix-ui/react-slot**          | Utility untuk komposisi komponen        |
| **@radix-ui/react-tabs**          | Tab navigation                          |
| **@radix-ui/react-tooltip**       | Tooltip interaktif                      |
| **class-variance-authority**      | Utility untuk variant styling           |
| **clsx**                          | Utility untuk conditional className     |
| **tailwind-merge**                | Merge Tailwind classes dengan smart     |

### Root Project

| Package          | Versi  | Fungsi                                         |
| ---------------- | ------ | ---------------------------------------------- |
| **concurrently** | ^8.2.2 | Menjalankan multiple commands secara bersamaan |

## 📦 Prasyarat

Sebelum memulai, pastikan Anda sudah menginstall:

- **Node.js** (versi 18.x atau lebih baru) - [Download Node.js](https://nodejs.org/)
- **npm** (biasanya sudah terinstall dengan Node.js)
- **Git** (opsional, untuk cloning repository)
- **Groq API Key** - [Dapatkan di Groq Console](https://console.groq.com/)

Cara cek versi yang terinstall:

```bash
node --version    # Harus v18.x atau lebih tinggi
npm --version     # Harus v9.x atau lebih tinggi
```

## 🚀 Instalasi

### Step 1: Clone atau Download Project

```bash
# Jika menggunakan Git
git clone <repository-url>
cd chatbot-app

# Atau download ZIP dan extract, lalu:
cd chatbot-app
```

### Step 2: Install Dependencies

#### Opsi A: Install Semua Sekaligus (Recommended)

```bash
npm run install:all
```

Script ini akan secara otomatis:

1. Install dependencies di root project
2. Install dependencies di folder backend
3. Install dependencies di folder frontend

#### Opsi B: Install Manual Satu per Satu

```bash
# 1. Install di root project
npm install

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install

# 4. Kembali ke root
cd ..
```

### Step 3: Konfigurasi Environment Variables

1. Masuk ke folder backend:

```bash
cd backend
```

2. Buat file `.env`:

```bash
# Windows (PowerShell)
New-Item .env

# Linux/Mac
touch .env
```

3. Buka file `.env` dan isi dengan konfigurasi berikut:

```env
# Groq API Configuration
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Frontend URL (untuk CORS)
FRONTEND_URL=http://localhost:5173

# Server Port (opsional, default: 3000)
PORT=3000
```

4. **Dapatkan Groq API Key:**
   - Kunjungi https://console.groq.com/
   - Login atau buat akun baru
   - Buka menu "API Keys"
   - Klik "Create API Key"
   - Copy API key dan paste ke file `.env`

## 🎮 Cara Menjalankan

### Metode 1: Jalankan Frontend & Backend Bersamaan (RECOMMENDED) ⭐

Ini adalah cara termudah dan tercepat:

```bash
# Dari root folder project
npm run dev
```

Perintah ini akan:

- ✅ Menjalankan backend server di http://localhost:3000
- ✅ Menjalankan frontend dev server di http://localhost:5173
- ✅ Kedua server akan auto-reload saat ada perubahan code
- ✅ Output dari kedua server muncul dalam satu terminal

**Tunggu hingga muncul pesan:**

```
[0] Server is running on port 3000
[1] VITE ready in XXX ms
[1] ➜  Local:   http://localhost:5173/
```

**Kemudian buka browser dan akses:** http://localhost:5173

### Metode 2: Jalankan Terpisah (Manual)

Jika Anda ingin control lebih detail, jalankan di terminal terpisah:

#### Terminal 1 - Backend:

```bash
cd backend
npm run dev

# Output yang diharapkan:
# Server is running on port 3000
```

#### Terminal 2 - Frontend:

```bash
cd frontend
npm run dev

# Output yang diharapkan:
# VITE ready in XXX ms
# ➜  Local:   http://localhost:5173/
```

### Production Mode

```bash
# Build frontend untuk production
cd frontend
npm run build

# Jalankan backend dalam production mode
cd ../backend
npm start
```

## 📁 Struktur Project

```
chatbot-app/
│
├── backend/                      # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── config/
│   │   │   └── app.js           # Konfigurasi Express & middleware
│   │   │
│   │   ├── controllers/
│   │   │   └── groq.controller.js    # Controller untuk chat dengan AI
│   │   │
│   │   ├── middleware/
│   │   │   ├── commonMiddleware.js   # Middleware umum (logging, security)
│   │   │   └── errorMiddleware.js    # Error handling middleware
│   │   │
│   │   ├── routes/
│   │   │   └── groq.route.js    # Route definitions untuk API
│   │   │
│   │   ├── services/
│   │   │   └── groq.service.js  # Business logic untuk Groq AI
│   │   │
│   │   ├── utils/
│   │   │   ├── chatLimit.js     # Rate limiting logic
│   │   │   └── responseUtils.js # Utility untuk format response
│   │   │
│   │   └── server.js            # Entry point backend
│   │
│   ├── .env                     # Environment variables (JANGAN commit!)
│   ├── .gitignore               # File yang diabaikan Git
│   ├── package.json             # Dependencies & scripts backend
│   └── package-lock.json
│
├── frontend/                    # Frontend App (React + Vite)
│   ├── public/                  # Static assets
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── groq.js         # API calls ke backend
│   │   │
│   │   ├── assets/             # Images, fonts, etc
│   │   │
│   │   ├── components/
│   │   │   ├── chat/
│   │   │   │   ├── ChatArea.jsx      # Area chat utama
│   │   │   │   └── MessageBubble.jsx # Bubble pesan chat
│   │   │   │
│   │   │   ├── header/
│   │   │   │   └── Header.jsx   # Header aplikasi
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   └── MainLayout.jsx    # Layout utama
│   │   │   │
│   │   │   ├── sidebar/
│   │   │   │   └── Sidebar.jsx  # Sidebar dengan riwayat chat
│   │   │   │
│   │   │   └── ui/              # Shadcn UI components
│   │   │       ├── avatar.jsx
│   │   │       ├── badge.jsx
│   │   │       ├── button.jsx
│   │   │       ├── card.jsx
│   │   │       ├── input.jsx
│   │   │       ├── scroll-area.jsx
│   │   │       ├── separator.jsx
│   │   │       ├── sheet.jsx
│   │   │       └── ...
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   ├── layouts/            # Layout components
│   │   ├── lib/
│   │   │   └── utils.js        # Utility functions (cn, dll)
│   │   │
│   │   ├── pages/
│   │   │   └── home/
│   │   │       └── Home.jsx    # Halaman utama
│   │   │
│   │   ├── routes/
│   │   │   ├── HomeRoutes.jsx  # Routes untuk home
│   │   │   └── index.jsx       # Route configuration
│   │   │
│   │   ├── App.jsx             # Root component
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Entry point frontend
│   │
│   ├── .gitignore
│   ├── components.json         # Shadcn UI config
│   ├── eslint.config.js        # ESLint configuration
│   ├── index.html              # HTML template
│   ├── jsconfig.json           # JavaScript config
│   ├── package.json            # Dependencies & scripts frontend
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js          # Vite configuration
│
├── node_modules/               # Root dependencies
├── .gitignore                  # Root gitignore
├── package.json                # Root package.json (untuk concurrently)
├── package-lock.json
└── README.md                   # Dokumentasi ini

```

## 🔌 API Documentation

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### 1. POST /api/groq/chat

Mengirim pesan ke AI dan mendapatkan response.

**Request:**

```bash
POST http://localhost:3000/api/groq/chat
Content-Type: application/json

{
  "message": "Halo, apa kabar?"
}
```

**Response Success (200):**

```json
{
  "success": true,
  "response": "Halo! Saya baik-baik saja. Ada yang bisa saya bantu?",
  "remaining": 9,
  "limitMessage": "9 requests remaining in this hour",
  "usage": {
    "current": 1,
    "max": 10
  }
}
```

**Response Error - Rate Limit (429):**

```json
{
  "success": false,
  "error": "Chat limit exceeded",
  "message": "You have reached the maximum of 10 requests per hour",
  "remaining": 0,
  "limit": {
    "current": 10,
    "max": 10
  },
  "timestamp": "2025-10-15T10:30:00.000Z"
}
```

**Response Error - Validation (400):**

```json
{
  "success": false,
  "error": "Message is required",
  "timestamp": "2025-10-15T10:30:00.000Z"
}
```

**Response Error - Server (500):**

```json
{
  "success": false,
  "error": "Failed to get response from Groq",
  "details": "Error message detail",
  "timestamp": "2025-10-15T10:30:00.000Z"
}
```

#### 2. GET /health

Health check endpoint untuk mengecek status server.

**Request:**

```bash
GET http://localhost:3000/health
```

**Response (200):**

```json
{
  "status": "OK",
  "timestamp": "2025-10-15T10:30:00.000Z",
  "uptime": 3600
}
```

### Rate Limiting

Backend menerapkan rate limiting untuk mencegah abuse:

- **Limit:** 10 requests per jam per IP address
- **Reset:** Counter direset setiap 1 jam
- **Tracking:** Berdasarkan IP address pengguna

## 🛠️ Scripts Available

### Root Project

```bash
# Install semua dependencies (backend + frontend)
npm run install:all

# Development mode - Jalankan frontend & backend bersamaan
npm run dev

# Development backend only
npm run dev:backend

# Development frontend only
npm run dev:frontend

# Production mode
npm start
```

### Backend Scripts

```bash
cd backend

# Development mode dengan auto-reload
npm run dev

# Production mode
npm start

# Install dependencies
npm install
```

### Frontend Scripts

```bash
cd frontend

# Development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Install dependencies
npm install
```

## 🌐 Ports & URLs

| Service  | Port | URL                       |
| -------- | ---- | ------------------------- |
| Frontend | 5173 | http://localhost:5173     |
| Backend  | 3000 | http://localhost:3000     |
| API Base | 3000 | http://localhost:3000/api |

## 🔧 Konfigurasi Lanjutan

### Backend Configuration

File: `backend/src/config/app.js`

```javascript
// CORS Configuration
cors({
  origin: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "http://localhost:3000",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
});

// Rate Limiting (dalam chatLimit.js)
const MAX_REQUESTS = 10; // Max requests per IP
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour
```

### Frontend Configuration

File: `frontend/src/api/groq.js`

```javascript
const API_BASE_URL = "http://localhost:3000/api";
```

Jika backend berjalan di port lain, ubah URL ini.

## 🎨 Customization

### Mengubah Tema Warna

File: `frontend/src/index.css`

```css
@layer base {
  :root {
    --primary: 210 100% 50%; /* Biru utama #1890ff */
    /* Ubah nilai ini untuk tema berbeda */
  }
}
```

### Mengubah Model AI

File: `backend/src/services/groq.service.js`

```javascript
const { text } = await generateText({
  model: groq("llama-3.3-70b-versatile"), // Ubah model di sini
  prompt: message,
});
```

Model yang tersedia:

- `llama-3.3-70b-versatile` (default)
- `llama-3.1-70b-versatile`
- `mixtral-8x7b-32768`
- Dan lainnya - lihat [Groq Models](https://console.groq.com/docs/models)

### Mengubah Rate Limit

File: `backend/src/utils/chatLimit.js`

```javascript
const MAX_REQUESTS = 10; // Ubah jumlah request maksimal
const TIME_WINDOW = 60 * 60 * 1000; // Ubah durasi (ms)
```

## 🐛 Troubleshooting

### Problem 1: Backend tidak bisa connect ke Groq

**Error:** `Failed to get response from Groq`

**Solusi:**

1. Cek GROQ_API_KEY di file `.env`
2. Pastikan API key valid dan aktif
3. Cek koneksi internet
4. Cek quota API di Groq Console

### Problem 2: CORS Error

**Error:** `Access-Control-Allow-Origin header`

**Solusi:**

1. Pastikan backend sudah running
2. Cek FRONTEND_URL di `.env` backend
3. Restart backend setelah mengubah `.env`
4. Cek file `backend/src/config/app.js` - pastikan CORS sudah dikonfigurasi dengan benar

### Problem 3: Port sudah digunakan

**Error:** `Port 3000 is already in use`

**Solusi:**

```bash
# Windows - Cari process yang menggunakan port
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9

# Atau ubah PORT di .env backend
PORT=3001
```

### Problem 4: Dependencies tidak terinstall

**Error:** `Cannot find module 'xxxx'`

**Solusi:**

```bash
# Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install

# Atau untuk semua folder:
npm run install:all
```

### Problem 5: Frontend tidak bisa fetch API

**Error:** `TypeError: NetworkError when attempting to fetch resource`

**Solusi:**

1. Pastikan backend sudah running di port 3000
2. Cek URL di `frontend/src/api/groq.js`
3. Buka http://localhost:3000/health di browser - harus return OK
4. Cek console browser untuk error detail

### Problem 6: Rate Limit terus terkena

**Solusi:**

1. Tunggu 1 jam untuk reset otomatis
2. Restart backend untuk reset counter
3. Atau ubah rate limit di `backend/src/utils/chatLimit.js`

### Problem 7: Vite port 5173 sudah digunakan

**Error:** `Port 5173 is in use`

**Solusi:**
Vite akan otomatis mencoba port lain (5174, 5175, dst). Atau set manual:

File: `frontend/vite.config.js`

```javascript
export default defineConfig({
  server: {
    port: 5174, // Ubah port di sini
  },
});
```

## 📚 Resource & Dokumentasi

- [Groq API Documentation](https://console.groq.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Express.js](https://expressjs.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📝 License

ISC License - bebas digunakan untuk keperluan pribadi maupun komersial.

## 👨‍💻 Support

Jika ada pertanyaan atau masalah:

1. Baca dokumentasi ini dengan teliti
2. Cek bagian Troubleshooting
3. Buka issue di repository

## 🎉 Selamat!

Jika Anda sampai di sini, berarti setup sudah berhasil! 🚀

Sekarang Anda bisa:

- ✅ Chat dengan AI menggunakan Groq
- ✅ Menyimpan riwayat percakapan
- ✅ Mengembangkan fitur baru
- ✅ Customize sesuai kebutuhan

**Happy Coding!** 💻✨

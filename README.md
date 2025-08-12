# Authentication System - Testing Guide

Panduan lengkap untuk menjalankan dan menguji aplikasi authentication system.

## Yang Akan Diuji

✅ **Fitur Utama:**
- Registrasi pengguna baru
- Login dengan email/password
- JWT authentication
- Social login (Google, Facebook)
- Profile management
- Responsive UI

✅ **Tech Stack:**
- **Backend**: NestJS + MySQL + JWT
- **Frontend**: Nuxt 3 + Vue 3 + Tailwind CSS

## Persiapan Testing Environment

### Yang Harus Diinstall:
1. **Node.js 18+** - [Download di sini](https://nodejs.org/)
2. **Docker Desktop** - [Download di sini](https://www.docker.com/products/docker-desktop/)

### Langkah Setup (PILIH SALAH SATU):

## OPSI 1: Setup dengan Docker (RECOMMENDED) 🐳

**Langkah 1:** Extract project
```bash
# Extract file zip yang dikirim
# Masuk ke folder project
cd "auth is developer"
```

**Langkah 2:** Jalankan dengan Docker
```bash
# Windows
.\start-docker.bat

# Linux/Mac
./start-docker.sh
```

**Langkah 3:** Tunggu sampai selesai (3-5 menit)

**Langkah 4:** Buka browser:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## OPSI 2: Setup Manual (Jika Docker bermasalah)

**Langkah 1:** Extract dan install dependencies
```bash
# Extract file zip yang dikirim
cd "auth is developer"
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

**Langkah 2:** Setup environment variables
```bash
# Copy file .env.example ke .env di folder backend dan frontend
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
```

**Langkah 3:** Install dan jalankan MySQL
- Install MySQL 8.0+
- Buat database bernama `auth_db`
- Update kredensial di `backend/.env`

**Langkah 4:** Jalankan aplikasi
```bash
npm run dev
```

## Skenario Testing 🧪

### 1. Test Registrasi
- Buka http://localhost:3000/register
- Isi form dengan data valid
- Klik "Register"
- ✅ **Expected**: Berhasil register dan redirect ke dashboard

### 2. Test Login
- Buka http://localhost:3000/login
- Login dengan akun yang sudah dibuat
- ✅ **Expected**: Berhasil login dan masuk ke dashboard

### 3. Test Protected Route
- Tanpa login, coba akses http://localhost:3000/dashboard
- ✅ **Expected**: Redirect ke halaman login

### 4. Test Logout
- Setelah login, klik tombol logout
- ✅ **Expected**: Logout dan redirect ke homepage

### 5. Test Responsive UI
- Buka di mobile view (F12 > Toggle device)
- ✅ **Expected**: UI tetap rapi di mobile

## API Testing (Optional)

Test API endpoints dengan Postman/curl:

```bash
# Register
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Login
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Troubleshooting 🔧

**Port sudah digunakan:**
```bash
# Stop semua container
docker-compose down
# Atau kill process di port 3000/3001
```

**Docker error:**
```bash
# Reset Docker
docker system prune -a
# Lalu jalankan ulang start-docker.bat
```

**Database connection error:**
- Pastikan MySQL running
- Check kredensial di `.env`
- Pastikan database `auth_db` sudah dibuat

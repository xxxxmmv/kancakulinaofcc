# Kanca Kulina Website

Website profesional untuk Kanca Kulina - produk kerajinan yang membawa budaya lokal ke kehidupan sehari-hari.

## 📋 Struktur File

```
kancakulina-site/
├── index.html          # File HTML utama
├── styles.css          # Styling & responsive design
├── script.js           # Interaktivitas & animasi
├── create_images.py    # Generator gambar placeholder
├── assets/             # Folder untuk gambar
│   ├── Logo-bulat.png
│   ├── Kak-Kusna.png
│   ├── Dek-Ceca.png
│   └── Cak-Soegi.png
└── README.md          # File ini
```

## 🚀 Cara Menggunakan

### 1. Generate Placeholder Images
```bash
python3 create_images.py
```

### 2. Buka Website
Buka file `index.html` di browser Anda:
- Mac: Buka Finder → double-click `index.html`
- Atau gunakan live server di VS Code (ekstensi Live Server)

## ✨ Fitur Website

### 1. **Header/Navigasi**
- Logo bulat di pojok kiri
- Judul brand "KANCA KULINA" dengan font italic
- Menu navigasi (Tentang, Produk, Pesan)

### 2. **Hero Section**
- Frame dekoratif dengan bunga hias
- Judul besar "KANCA KULINA"
- Subjudul penjelasan tentang brand

### 3. **Tentang Section**
- Quote "Rumah bukan sekedar tempat..." dengan icon rumah
- Filosofi Kanca Kulina dalam tulisan Jawa
- Penjelasan makna filosofi

### 4. **Koleksi Produk**
- 3 produk: Kak Kusna (Tumpeng), Dek Ceca (Pecel), Cak Soegi (Bakso)
- Deskripsi dan makna budaya setiap produk
- Hover animation untuk interaktifitas

### 5. **Detail Produk**
- Spesifikasi teknis (ukuran, material, koleksi)
- Tata letak responsif

### 6. **Pesan/Pre-order**
- Tombol pre-order dengan link Google Forms
- Background warna coklat yang menarik

### 7. **Footer**
- Informasi brand
- Link Instagram @kancakulina
- Copyright

## 🎨 Desain & Warna

- **Warna Utama**: #D4A574(Brown)
- **Warna Sekunder**: #E8B883 (Light Brown)
- **Warna Accent**: #F5EFE6 (Beige)
- **Warna Accent**: #F0C898 
- **Warna Footer**: #6D4C41 
- **Font**: Poppins (body), Playfair Display (heading), Crimson Text (brand)

## 📱 Responsive Design

Website sudah responsif untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Extra Small (<480px)

## 🔧 Customization Tips

### Mengubah Warna
Edit file `styles.css` bagian `:root`:
```css
:root {
    --primary-color: #8B5A2B;
    --secondary-color: #D4A574;
    /* ... */
}
```

### Mengubah Konten
Edit file `index.html` sesuai kebutuhan Anda

### Menambahkan Gambar Real
Ganti file placeholder di folder `assets/` dengan gambar asli

## 📞 Kontak & Social Media

- Instagram: [@kancakulina](https://instagram.com/kancakulina)
- Pre-order: [Google Forms](https://bit.ly/4d4J8Uz)

## 📝 Catatan

- Semua gambar saat ini adalah placeholder - ganti dengan gambar asli produk Anda
- Link pre-order sudah terhubung ke Google Forms yang Anda buat
- Website menggunakan Google Fonts untuk typography yang baik

---

**Dibuat dengan ❤️ untuk Kanca Kulina**

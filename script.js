// Smooth scrolling saat mengklik tautan navigasi
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Offset untuk header melayang
        behavior: 'smooth'
      });
    }
  });
});

// Fungsi untuk membuka dan menutup modal sertifikat
function bukaModal() {
  document.getElementById("modalSertifikat").style.display = "block";
}

function tutupModal() {
  document.getElementById("modalSertifikat").style.display = "none";
}

// Tutup modal jika pengguna mengklik area di luar kotak modal
window.onclick = function(event) {
  const modal = document.getElementById("modalSertifikat");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Fungsi Buka & Tutup Modal Sertifikat Sekretaris
function bukaModalSekretaris() {
  document.getElementById("modalSekretaris").style.display = "block";
}

function tutupModalSekretaris() {
  document.getElementById("modalSekretaris").style.display = "none";
}

// Menutup modal saat mengklik di luar area gambar
window.addEventListener("click", function(event) {
  const modalSekretaris = document.getElementById("modalSekretaris");
  if (event.target === modalSekretaris) {
    modalSekretaris.style.display = "none";
  }
});
// Fungsi Buka & Tutup Modal Sertifikat Ketua Panitia
function bukaModalKetua() {
  document.getElementById("modalKetua").style.display = "block";
}

function tutupModalKetua() {
  document.getElementById("modalKetua").style.display = "none";
}

// Menutup modal saat mengklik di luar area gambar
window.addEventListener("click", function(event) {
  const modalKetua = document.getElementById("modalKetua");
  if (event.target === modalKetua) {
    modalKetua.style.display = "none";
  }
});
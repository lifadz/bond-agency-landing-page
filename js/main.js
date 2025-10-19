// Fungsi untuk toggle menu mobile
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fungsi untuk animasi saat scroll (Scroll Reveal)
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Jika elemen masuk ke dalam layar
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1, // Munculkan saat 10% elemen terlihat
  }
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// Fungsi untuk FAQ Accordion
const faqItems = document.querySelectorAll(".faq-question");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector("svg");
    const parentItem = item.parentElement;

    // Tutup semua jawaban lain
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== parentItem) {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        const otherIcon = otherItem.querySelector(".faq-icon");
        if (otherAnswer && otherIcon && otherAnswer.style.maxHeight) {
          otherAnswer.style.maxHeight = null;
          otherIcon.style.transform = "rotate(0deg)";
        }
      }
    });

    // Buka atau tutup jawaban yang diklik
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});

// Header scroll effect and active nav link
const header = document.getElementById("main-header");
// MEMASTIKAN SECTIONS MENGGUNAKAN ID YANG TERBARU (termasuk #beranda)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  // Header shadow on scroll
  if (window.scrollY > 10) {
    header.classList.add("shadow-lg", "border-b", "border-gray-700");
  } else {
    header.classList.remove("shadow-lg", "border-b", "border-gray-700");
  }

  // Active nav link on scroll (Scroll Spy)
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // Cek ID 'beranda' di sini
    if (
      section.id === "beranda" &&
      pageYOffset < section.offsetTop + section.offsetHeight / 2
    ) {
      current = section.getAttribute("id");
    }
    // Logika normal untuk section lain
    else if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Karena logo sekarang menunjuk ke #beranda, kita pastikan link navigasi yang sesuai mendapatkan status aktif.
    if (current === "beranda" && link.getAttribute("href") === "#beranda") {
      link.classList.add("active");
    } else if (
      link.getAttribute("href").includes(current) &&
      current !== "beranda"
    ) {
      link.classList.add("active");
    }
  });

  // Floating WhatsApp Button Logic
  const whatsappBtn = document.getElementById("whatsapp-button");
  if (window.scrollY > 300) {
    // Muncul setelah scroll 300px
    whatsappBtn.classList.add("visible");
  } else {
    whatsappBtn.classList.remove("visible");
  }
});

// Service Detail View Logic
document.addEventListener("DOMContentLoaded", () => {
  const serviceData = {
    "bid-bond": {
      title: "Jaminan Penawaran / Bid Bond",
      image: "asset/layanan1.jpeg",
      alt: "Proses penawaran proyek konstruksi dengan jaminan bid bond",
      content: `
                        <p>Jaminan Penawaran, atau yang lebih dikenal sebagai Bid Bond, adalah elemen penting dalam dunia bisnis dan konstruksi. Ini adalah jaminan finansial yang diajukan oleh pihak yang mengajukan penawaran atau tawaran (biasanya kontraktor atau penyedia jasa) kepada pihak pemberi kontrak (biasanya pemilik proyek atau lembaga pemerintah) sebagai jaminan bahwa mereka akan menjalankan kontrak dengan benar jika tawaran mereka diterima.</p>
                        <p>Meskipun sering kali dianggap sebagai formalitas dalam dunia penawaran bisnis, Jaminan Penawaran memiliki peran yang sangat penting dan beberapa manfaat yang mungkin tidak langsung terlihat.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">1. Memenangkan Kepercayaan Pihak Pemberi Kontrak</h3>
                        <p>Pihak pemberi kontrak sering memerlukan Jaminan Penawaran sebagai tanda bahwa pihak yang mengajukan penawaran memiliki niat serius dan sumber daya finansial untuk menjalankan kontrak jika mereka terpilih. Ini memungkinkan pemberi kontrak untuk memiliki kepercayaan lebih besar terhadap para pesaing yang mengajukan penawaran.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">2. Menghindari Penyalahgunaan Proses Penawaran</h3>
                        <p>Tanpa Jaminan Penawaran, ada potensi bagi pihak yang mengajukan penawaran untuk menyalahgunakan proses penawaran dengan mengajukan tawaran yang tidak serius atau tidak realistis. Jaminan ini memberikan insentif untuk mengurangi penawaran yang tidak masuk akal atau merugikan pemilik proyek.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">3. Melindungi Pihak Pemberi Kontrak</h3>
                        <p>Jaminan Penawaran juga berfungsi sebagai perlindungan bagi pihak pemberi kontrak. Jika pihak yang mengajukan penawaran menarik diri setelah tawaran mereka diterima atau gagal memenuhi kewajiban kontrak, pihak pemberi kontrak dapat memanfaatkan Jaminan Penawaran untuk mendapatkan ganti rugi.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">4. Mendorong Persaingan Sehat</h3>
                        <p>Jaminan Penawaran membantu mendorong persaingan sehat dalam proses penawaran. Ini memastikan bahwa setiap pihak yang mengajukan penawaran harus serius dalam persiapan dan menyediakan tawaran yang kompetitif, yang pada akhirnya menguntungkan pihak pemberi kontrak.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">5. Penggunaan Sumber Daya yang Efisien</h3>
                        <p>Bagi pihak yang mengajukan penawaran, Jaminan Penawaran membantu menghindari penggunaan sumber daya yang signifikan pada persiapan penawaran jika mereka tidak yakin bahwa mereka akan mendapatkan kontrak. Hal ini dapat menghemat waktu dan biaya yang seharusnya dikeluarkan.</p>
                        <h3 class="text-2xl font-bold text-white mt-6 mb-3">6. Menyelamatkan Reputasi Bisnis</h3>
                        <p>Untuk pihak yang berhasil memenangkan kontrak, menjalankan kewajiban kontrak dengan baik adalah kunci. Jika mereka gagal melakukannya, Jaminan Penawaran dapat digunakan sebagai perlindungan, tetapi juga dapat merusak reputasi bisnis mereka di masa depan.</p>
                        <p>Jaminan Penawaran adalah instrumen yang melayani berbagai kepentingan dalam dunia bisnis dan konstruksi. Ini memainkan peran penting dalam memenangkan kepercayaan, memastikan integritas proses penawaran, dan melindungi hak dan kewajiban semua pihak terlibat dalam kontrak. Oleh karena itu, memahami pentingnya Jaminan Penawaran adalah langkah awal yang penting dalam menghadapi dunia bisnis yang kompetitif.</p>
                      `,
    },
    "performance-bond": {
      title: "Jaminan Pelaksanaan / Performance Bond",
      image: "asset/layanan2.jpeg",
      alt: "Pekerja konstruksi mengerjakan proyek yang dijamin dengan performance bond",
      content: `<p>Jaminan Pelaksanaan adalah komitmen tertulis dari pihak penjamin (Surety) kepada pemilik proyek (Obligee) untuk menjamin bahwa kontraktor (Principal) akan menyelesaikan pekerjaan sesuai dengan ketentuan yang tertera dalam kontrak. Ini adalah jaring pengaman krusial untuk memastikan proyek berjalan sesuai rencana.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Bagaimana Cara Kerjanya?</h3><p>Jika kontraktor gagal memenuhi kewajiban kontraktualnya (wanprestasi), Obligee dapat mengajukan klaim. Surety kemudian akan memberikan kompensasi finansial sesuai nilai jaminan, yang dapat digunakan untuk menutupi biaya tambahan dalam menyelesaikan proyek, misalnya dengan menunjuk kontraktor lain.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Poin Kunci Jaminan Pelaksanaan:</h3><ul class="list-disc list-inside space-y-2"><li><strong>Kepastian Penyelesaian Proyek:</strong> Memberikan rasa aman kepada pemilik proyek bahwa pekerjaan akan selesai sesuai spesifikasi, waktu, dan biaya.</li><li><strong>Mitigasi Risiko Finansial:</strong> Melindungi Obligee dari kerugian finansial yang signifikan akibat kegagalan kontraktor.</li><li><strong>Meningkatkan Profesionalisme:</strong> Mendorong kontraktor untuk bekerja dengan standar kualitas tertinggi demi menjaga reputasi dan menghindari klaim.</li></ul>`,
    },
    "advance-payment": {
      title: "Jaminan Uang Muka / Advance Payment Bond",
      image: "asset/layanan3.jpeg",
      alt: "Manajer proyek menerima uang muka untuk memulai pekerjaan konstruksi",
      content: `<p>Jaminan Uang Muka (Advance Payment Bond) adalah instrumen yang memberikan proteksi atas dana yang dibayarkan di muka oleh pemilik proyek (Obligee) kepada kontraktor (Principal). Tujuan utamanya adalah memastikan uang muka tersebut digunakan sebagaimana mestinya untuk keperluan proyek.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Perlindungan Dana Anda</h3><p>Jaminan ini akan aktif jika kontraktor gagal menggunakan uang muka sesuai kesepakatan, misalnya tidak memulai pekerjaan atau menyalahgunakan dana. Dalam kasus tersebut, perusahaan penjamin (Surety) akan mengembalikan dana uang muka kepada Obligee hingga batas nilai jaminan.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Keuntungan Menggunakan Jaminan Uang Muka:</h3><ul class="list-disc list-inside space-y-2"><li><strong>Bagi Pemilik Proyek:</strong> Memberikan keamanan dan keyakinan bahwa investasi awal tidak akan hilang sia-sia.</li><li><strong>Bagi Kontraktor:</strong> Membantu memperlancar arus kas (cash flow) di tahap awal proyek untuk mobilisasi, pembelian material, dan biaya persiapan lainnya.</li><li><strong>Membangun Kepercayaan:</strong> Menciptakan hubungan kerja yang transparan dan profesional antara kedua belah pihak.</li></ul>`,
    },
    "maintenance-bond": {
      title: "Jaminan Pemeliharaan / Maintenance Bond",
      image: "asset/layanan4.jpg",
      alt: "Pekerja melakukan perbaikan gedung dalam masa pemeliharaan",
      content: `<p>Pekerjaan proyek tidak berhenti saat serah terima. Jaminan Pemeliharaan (Maintenance Bond) hadir untuk memberikan perlindungan kepada pemilik proyek (Obligee) selama masa pemeliharaan yang telah disepakati dalam kontrak (umumnya 6 bulan hingga 1 tahun setelah proyek selesai).</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Fungsi Utama Jaminan Pemeliharaan</h3><p>Jaminan ini memastikan bahwa kontraktor (Principal) akan bertanggung jawab penuh untuk memperbaiki setiap kerusakan, cacat mutu, atau kegagalan fungsi yang timbul dari pekerjaan konstruksi sebelumnya. Jika kontraktor lalai dalam melakukan perbaikan yang diperlukan, pemilik proyek dapat mengajukan klaim kepada penjamin (Surety) untuk menutupi biaya perbaikan tersebut.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Aspek Penting yang Dilindungi:</h3><ul class="list-disc list-inside space-y-2"><li><strong>Kualitas Hasil Akhir:</strong> Menjamin bahwa kualitas konstruksi memenuhi standar yang diharapkan dan tahan lama.</li><li><strong>Perlindungan dari Biaya Tambahan:</strong> Menghindarkan pemilik proyek dari pengeluaran tak terduga untuk perbaikan kerusakan pasca-konstruksi.</li><li><strong>Akuntabilitas Kontraktor:</strong> Menegaskan tanggung jawab kontraktor bahkan setelah proyek secara resmi diserahkan.</li></ul>`,
    },
    "payment-bond": {
      title: "Jaminan Pembayaran / Payment Bond",
      image: "asset/layanan5.jpg",
      alt: "Subkontraktor menerima pembayaran yang dijamin oleh payment bond",
      content: `<p>Dalam sebuah proyek konstruksi, kelancaran pasokan material dan kinerja sub-kontraktor sangat bergantung pada kepastian pembayaran. Jaminan Pembayaran (Payment Bond) dirancang untuk memberikan kepastian tersebut, dengan menjamin bahwa kontraktor utama (Principal) akan melunasi semua kewajiban pembayarannya kepada pihak ketiga.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Siapa yang Dilindungi?</h3><p>Jaminan ini secara spesifik melindungi pihak-pihak yang menyediakan jasa atau material untuk proyek, seperti:</p><ul class="list-disc list-inside space-y-2 my-4"><li>Sub-kontraktor</li><li>Pemasok material (supplier)</li><li>Pekerja atau buruh</li></ul><p>Jika kontraktor utama gagal membayar mereka, pihak-pihak ini dapat mengajukan klaim langsung kepada perusahaan penjamin (Surety) untuk mendapatkan haknya.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Mengapa Jaminan Ini Penting?</h3><ul class="list-disc list-inside space-y-2"><li><strong>Mencegah Hak Gadai (Liens):</strong> Menghindarkan pemilik proyek dari risiko propertinya dibebani hak gadai oleh pemasok yang belum dibayar.</li><li><strong>Menjaga Kelancaran Proyek:</strong> Memastikan rantai pasok tidak terganggu dan pekerjaan terus berjalan tanpa hambatan akibat sengketa pembayaran.</li><li><strong>Menarik Pemasok Berkualitas:</strong> Pemasok dan sub-kontraktor lebih percaya diri untuk bekerja sama dalam proyek yang memiliki Jaminan Pembayaran.</li></ul>`,
    },
    "sp2d-bond": {
      title: "Jaminan SP2D Akhir Tahun",
      image: "asset/layanan6.jpg",
      alt: "Dokumen Surat Perintah Pencairan Dana (SP2D) untuk proyek pemerintah",
      content: `<p>Jaminan Surat Perintah Pencairan Dana (SP2D) adalah solusi spesifik yang seringkali dibutuhkan dalam proyek-proyek pemerintah, khususnya saat mendekati akhir tahun anggaran. Jaminan ini berfungsi sebagai "jembatan" yang memungkinkan pencairan dana termin terakhir kepada kontraktor, meskipun sisa pekerjaan fisik belum mencapai 100% karena keterbatasan waktu.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Mekanisme Kerja Jaminan SP2D</h3><p>Kontraktor (Principal) memberikan jaminan ini kepada instansi pemerintah (Obligee) sebagai komitmen bahwa sisa pekerjaan yang belum selesai akan dirampungkan sesuai target waktu di awal tahun anggaran berikutnya. Dengan adanya jaminan ini, pemerintah dapat mencairkan dana SP2D tanpa khawatir, karena jika kontraktor wanprestasi, penjamin (Surety) akan mengembalikan dana yang telah dicairkan tersebut.</p><h3 class="text-2xl font-bold text-white mt-6 mb-3">Tujuan dan Kegunaan:</h3><ul class="list-disc list-inside space-y-2"><li><strong>Optimalisasi Anggaran:</strong> Membantu instansi pemerintah memaksimalkan penyerapan anggaran belanja pada tahun berjalan.</li><li><strong>Kepastian Finansial Kontraktor:</strong> Memberikan kepastian arus kas bagi kontraktor di akhir tahun untuk menutup biaya operasional.</li><li><strong>Jaminan Penyelesaian:</strong> Memastikan bahwa proyek akan tetap diselesaikan secara penuh meskipun pembayarannya telah dilakukan di muka.</li></ul>`,
    },
  };

  const gridView = document.getElementById("service-grid-view");
  const detailView = document.getElementById("service-detail-view");
  const backBtn = document.getElementById("back-to-grid-btn");
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  const detailTitle = document.getElementById("detail-title");
  const detailImage = document.getElementById("detail-image");
  const detailContent = document.getElementById("detail-content");

  const layananSection = document.getElementById("layanan");

  const showDetail = (serviceId) => {
    const data = serviceData[serviceId];
    if (!data) return;

    detailTitle.textContent = data.title;
    detailImage.src = data.image;
    detailImage.alt = data.alt;
    detailContent.innerHTML = data.content;

    gridView.classList.add("opacity-0");
    setTimeout(() => {
      gridView.classList.add("hidden");
      detailView.classList.remove("hidden");
      setTimeout(() => {
        detailView.classList.remove("opacity-0");
        layananSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }, 500);
  };

  const showGrid = () => {
    detailView.classList.add("opacity-0");
    setTimeout(() => {
      detailView.classList.add("hidden");
      gridView.classList.remove("hidden");
      setTimeout(() => {
        gridView.classList.remove("opacity-0");
      }, 50);
    }, 500);
  };

  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const serviceId = e.currentTarget.dataset.service;
      showDetail(serviceId);
    });
  });

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showGrid();
  });

  // HERO SLIDER SCRIPT
  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.querySelector(".hero-dots");
  const heroTextContainer = document.getElementById("hero-text-content");
  let currentSlide = 0;
  let slideInterval;

  const slideContent = [
    {
      headline: "Solusi Jaminan & Asuransi Terpercaya untuk Bisnis Anda",
      subheadline:
        "Menyediakan layanan Bank Garansi dan Surety Bond yang cepat, mudah, dan profesional untuk kelancaran setiap proyek Anda.",
    },
    {
      headline: "Kepastian dan Perlindungan di Setiap Pekerjaan Konstruksi",
      subheadline:
        "Dengan dukungan tim berpengalaman dan proses yang efisien, kami membantu menjamin keberhasilan proyek Anda dari awal hingga serah terima.",
    },
    {
      headline: "Bangun Kepercayaan dan Wujudkan Kesuksesan Bersama",
      subheadline:
        "Kami hadir sebagai mitra terpercaya dalam memberikan solusi Bank Garansi dan Surety Bond yang mendukung pertumbuhan bisnis Anda secara berkelanjutan.",
    },
    {
      headline: "Bersama Mewujudkan Bisnis yang Lebih Tangguh dan Terpercaya",
      subheadline:
        "PT. Mitra Jasa Insurance siap menjadi mitra andalan Anda dalam memberikan jaminan dan perlindungan proyek yang terencana, terukur, dan berkelanjutan.",
    },
  ];

  function createDots() {
    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("hero-dot");
      dot.addEventListener("click", () => {
        goToSlide(i);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateHeroText(index) {
    heroTextContainer.style.opacity = 0;
    setTimeout(() => {
      heroTextContainer.innerHTML = `
              <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">${slideContent[index].headline}</h1>
              <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">${slideContent[index].subheadline}</p>
            `;
      heroTextContainer.style.opacity = 1;
    }, 500);
  }

  function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    dotsContainer.children[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    dotsContainer.children[currentSlide].classList.add("active");
    updateHeroText(currentSlide);
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Ubah URL tanpa reload (hapus tanda #)
    window.history.pushState(null, '', this.getAttribute('href').replace('#', '/'));
  });
});

  // Initialize Slider
  createDots();
  goToSlide(0);
  resetInterval();
});

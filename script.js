const image = (label, colors) => {
  const [c1, c2] = colors;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'>
    <defs>
      <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
        <stop stop-color='${c1}' offset='0'/><stop stop-color='${c2}' offset='1'/>
      </linearGradient>
    </defs>
    <rect width='400' height='500' fill='url(#g)'/>
    <circle cx='300' cy='80' r='70' fill='rgba(255,255,255,.22)'/>
    <circle cx='70' cy='420' r='90' fill='rgba(255,255,255,.2)'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='28' font-family='Segoe UI' letter-spacing='1'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const gallerySet = {
  aoDaiTetNu: [image('Áo Dài Tết Nữ 1', ['#f8c9cf', '#f6bca5']), image('Áo Dài Tết Nữ 2', ['#f4b3c5', '#f2d7bd']), image('Áo Dài Tết Nữ 3', ['#f7d0bf', '#e7b4b9'])],
  aoDaiTetNam: [image('Áo Dài Tết Nam 1', ['#dcbfbc', '#f1d5c8']), image('Áo Dài Tết Nam 2', ['#e2c9b7', '#f2dfd7']), image('Áo Dài Tết Nam 3', ['#d8b0b4', '#e6cdbf'])],
  aoDaiBeLe: [image('Áo Dài Bê Lễ 1', ['#f6b8c4', '#f8d6bf']), image('Áo Dài Bê Lễ 2', ['#f3b6ab', '#f0c2bf']), image('Áo Dài Bê Lễ 3', ['#f5cbc3', '#e8afc2'])],
  aoDaiHocSinh: [image('Áo Dài Học Sinh 1', ['#f3dae1', '#f7d5c5']), image('Áo Dài Học Sinh 2', ['#eed0d6', '#f0e0cc']), image('Áo Dài Học Sinh 3', ['#f5e4e1', '#e8c7be'])],
  aoDaiBaSui: [image('Áo Dài Bà Sui 1', ['#d8a5a8', '#f0c6b2']), image('Áo Dài Bà Sui 2', ['#cfa3a5', '#e9beaa']), image('Áo Dài Bà Sui 3', ['#d0b5a8', '#e2b7b1'])],
  aoDaiDiTiec: [image('Áo Dài Đi Tiệc 1', ['#f4bdba', '#f7cfb8']), image('Áo Dài Đi Tiệc 2', ['#f8cec3', '#efb0b8']), image('Áo Dài Đi Tiệc 3', ['#e3a1aa', '#f1cdb0'])],
  yem: [image('Yếm Truyền Thống 1', ['#f6b9ae', '#f4d2a8']), image('Yếm Truyền Thống 2', ['#f0c8b8', '#edb7a7']), image('Yếm Truyền Thống 3', ['#e9aca7', '#efc7aa'])],
  vest: [image('Áo Vest 1', ['#c7b5b6', '#e8cac2']), image('Áo Vest 2', ['#b7a1a1', '#ddc7ba']), image('Áo Vest 3', ['#d5c0bf', '#ccb3af'])],
  makeupMatTiec: [image('Makeup Mặt Tiệc 1', ['#f2b4c0', '#f7d3bf']), image('Makeup Mặt Tiệc 2', ['#f5c5ca', '#f3bcaa']), image('Makeup Mặt Tiệc 3', ['#e8b0b5', '#f0d4c4'])],
  makeupBaSui: [image('Makeup Bà Sui 1', ['#d5a2af', '#e8c2b8']), image('Makeup Bà Sui 2', ['#cf9da6', '#e1b4ad']), image('Makeup Bà Sui 3', ['#ddb1b5', '#d3a49e'])],
  makeupCoDauAnHoi: [image('Cô Dâu Ăn Hỏi 1', ['#f4c8ce', '#f2dbcc']), image('Cô Dâu Ăn Hỏi 2', ['#eab8c2', '#eed3bf']), image('Cô Dâu Ăn Hỏi 3', ['#f7d4d2', '#eec3c1'])],
  makeupCoDauDaiTiec: [image('Cô Dâu Đãi Tiệc 1', ['#efb3bf', '#f1c2b0']), image('Cô Dâu Đãi Tiệc 2', ['#e7a4b1', '#eec9b2']), image('Cô Dâu Đãi Tiệc 3', ['#f0c3bf', '#dba5af'])],
  makeupCoDauNhaTho: [image('Cô Dâu Nhà Thờ 1', ['#f6d6d8', '#f5e1d0']), image('Cô Dâu Nhà Thờ 2', ['#eed0d4', '#f0d8cd']), image('Cô Dâu Nhà Thờ 3', ['#f4e5e1', '#e8cbc8'])],
  comboAoDaiTet: [image('Combo Nhóm Áo Dài Tết 1', ['#f2b8c0', '#f6d4bd']), image('Combo Nhóm Áo Dài Tết 2', ['#f5c5c6', '#efb6a8']), image('Combo Nhóm Áo Dài Tết 3', ['#df9fa6', '#f0c6b6'])],
  comboBeLe: [image('Combo Bê Lễ 1', ['#f6c2ca', '#f4ceb8']), image('Combo Bê Lễ 2', ['#f0b6bf', '#efbeab']), image('Combo Bê Lễ 3', ['#ebadb3', '#eecdbb'])],
  comboAoDaiMakeup: [image('Combo Áo Dài + Makeup 1', ['#eeb5c0', '#f4d2c4']), image('Combo Áo Dài + Makeup 2', ['#f6c4ca', '#e7b2b5']), image('Combo Áo Dài + Makeup 3', ['#efb8b8', '#e5c8b7'])]
};

const aoDaiItems = [
  { name: 'Áo dài Tết – Nữ', price: '80.000đ/bộ', gallery: 'aoDaiTetNu' },
  { name: 'Áo dài Tết – Nam', price: '80.000đ/bộ', gallery: 'aoDaiTetNam' },
  { name: 'Áo dài bê lễ', price: '70.000đ – 90.000đ/bộ', gallery: 'aoDaiBeLe' },
  { name: 'Áo dài học sinh', price: '70.000đ/bộ', gallery: 'aoDaiHocSinh' },
  { name: 'Áo dài bà sui', price: '150.000đ – 300.000đ/bộ', gallery: 'aoDaiBaSui' },
  { name: 'Áo dài đi tiệc', price: '100.000đ/bộ', gallery: 'aoDaiDiTiec' },
  { name: 'Yếm truyền thống', price: '100.000đ/bộ', gallery: 'yem' },
  { name: 'Áo vest', price: '300.000đ/bộ', gallery: 'vest' }
];

const makeupItems = [
  { name: 'Makeup mặt tiệc', price: '60.000đ – 80.000đ', gallery: 'makeupMatTiec' },
  { name: 'Makeup bà sui', price: '300.000đ', gallery: 'makeupBaSui' },
  { name: 'Makeup cô dâu ăn hỏi', price: '800.000đ', gallery: 'makeupCoDauAnHoi' },
  { name: 'Makeup cô dâu đãi tiệc', price: '1.200.000đ', gallery: 'makeupCoDauDaiTiec' },
  { name: 'Makeup cô dâu nhà thờ', price: '600.000đ', gallery: 'makeupCoDauNhaTho' }
];

const comboItems = [
  {
    name: 'Combo nhóm Áo dài Tết',
    price: 'Có phụ kiện: 95.000đ (3–4 người), 90.000đ (từ 5 người). Không phụ kiện: 75.000đ (3–4 người), 70.000đ (từ 5 người).',
    gallery: 'comboAoDaiTet'
  },
  {
    name: 'Combo Áo dài bê lễ',
    price: 'Nhóm 3–5 người: 80.000đ/người. Nhóm từ 7 người trở lên: 75.000đ/người (tặng cài tóc).',
    gallery: 'comboBeLe'
  },
  {
    name: 'Combo Áo dài Tết + Makeup',
    price: 'Tone hồng: 150.000đ/người. Tone hồng + uốn tóc tạo kiểu: 180.000đ/người.',
    gallery: 'comboAoDaiMakeup'
  }
];

const createCards = (selector, items) => {
  const root = document.querySelector(selector);
  root.innerHTML = items
    .map((item) => {
      const thumb = gallerySet[item.gallery][0];
      return `<button class="service-card" data-gallery="${item.gallery}" data-title="${item.name}">
          <img class="thumb" src="${thumb}" alt="${item.name}" loading="lazy" decoding="async" />
          <span class="service-name">${item.name}</span>
          <span class="price">${item.price}</span>
        </button>`;
    })
    .join('');
};

createCards('#aoDaiGrid', aoDaiItems);
createCards('#makeupGrid', makeupItems);
createCards('#comboGrid', comboItems);

const popupBackdrop = document.getElementById('popupBackdrop');
const mainPopup = document.getElementById('mainPopup');
const closeMainPopup = document.getElementById('closeMainPopup');
const reopenBtn = document.getElementById('reopenBtn');

closeMainPopup.addEventListener('click', () => {
  popupBackdrop.classList.add('hidden');
  reopenBtn.style.display = 'inline-flex';
  document.body.style.overflow = 'auto';
});

reopenBtn.addEventListener('click', () => {
  popupBackdrop.classList.remove('hidden');
  reopenBtn.style.display = 'none';
  document.body.style.overflow = 'hidden';
});

const galleryBackdrop = document.getElementById('galleryBackdrop');
const galleryTrack = document.getElementById('galleryTrack');
const galleryDots = document.getElementById('galleryDots');
const galleryTitle = document.getElementById('galleryTitle');
const closeGallery = document.getElementById('closeGallery');

let currentIndex = 0;
let currentImages = [];
let autoTimer = null;
let touchStartX = 0;
let touchEndX = 0;

const renderGallery = () => {
  galleryTrack.innerHTML = currentImages
    .map((src) => `<div class="slide"><img src="${src}" alt="Ảnh dịch vụ" loading="lazy" decoding="async" /></div>`)
    .join('');
  galleryDots.innerHTML = currentImages.map((_, i) => `<span class="dot ${i === currentIndex ? 'active' : ''}"></span>`).join('');
  updateGallery();
};

const updateGallery = () => {
  const slides = galleryTrack.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  [...galleryDots.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
};

const startAutoplay = () => {
  stopAutoplay();
  autoTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateGallery();
  }, 2600);
};

const stopAutoplay = () => {
  if (autoTimer) clearInterval(autoTimer);
};

const openGallery = (title, key) => {
  currentImages = gallerySet[key];
  currentIndex = 0;
  galleryTitle.textContent = title;
  renderGallery();
  galleryBackdrop.classList.add('open');
  galleryBackdrop.setAttribute('aria-hidden', 'false');
  startAutoplay();
};

closeGallery.addEventListener('click', () => {
  galleryBackdrop.classList.remove('open');
  galleryBackdrop.setAttribute('aria-hidden', 'true');
  stopAutoplay();
});

mainPopup.addEventListener('click', (event) => {
  const card = event.target.closest('.service-card');
  if (!card) return;
  openGallery(card.dataset.title, card.dataset.gallery);
});

galleryTrack.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

galleryTrack.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 35) {
    currentIndex = (currentIndex + 1) % currentImages.length;
  } else if (touchEndX - touchStartX > 35) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  }
  updateGallery();
  startAutoplay();
});

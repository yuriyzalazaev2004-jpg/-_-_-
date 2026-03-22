const cityConfigs = {
  moscow: {
    label: "Москва",
    badge: "Москва",
    address: "г. Москва, ул. Беговая, д. 6",
    shortAddress: "ул. Беговая, д. 6",
    yandexMap:
      "https://yandex.ru/maps/?text=Москва, ул. Беговая, д. 6",
    dikidi: "https://dikidi.net/#widget=206531",
    prices: {
      45: "3000 ₽",
      60: "3500 ₽",
      90: "5000 ₽",
      120: "6500 ₽"
    }
  },
  saratov: {
    label: "Саратов",
    badge: "Саратов",
    address: "г. Саратов, ул. Кузнецова, д. 7",
    shortAddress: "ул. Кузнецова, д. 7",
    yandexMap:
      "https://yandex.ru/maps/?text=Саратов, ул. Кузнецова, д. 7",
    dikidi: "https://dikidi.net/#widget=206528",
    prices: {
      30: "1500 ₽",
      45: "2250 ₽",
      60: "3000 ₽",
      75: "3500 ₽",
      90: "4000 ₽",
      120: "5000 ₽"
    }
  }
};

const baseLinks = {
  telegram: "https://t.me/elena_tuatara_massag",
  whatsapp: "https://wa.me/79042406833",
  max: "https://max.ru/u/f9LHodD0cOLbVHM9ql3WQbXqbwl_xBhF61Ipdc6W-UP6LQ_kdhzG-kq2bZY",
  vk: "https://vk.com/massag_elena_tuatara"
};

const storageKeyCity = "tuatara_selected_city";
let currentCity = localStorage.getItem(storageKeyCity) || "";

/* ---------- ФОТО КАБИНЕТА ---------- */
function getCabinetImages() {
  if ((currentCity || "moscow") === "saratov") {
    return [
      {
        src: "images/cabinet_2/cabinet.jpg",
        alt: "Кабинет в Саратове"
      }
    ];
  }

  return Array.from({ length: 4 }, (_, i) => ({
    src: `images/cabinet/cabinet-${i + 1}.jpg`,
    alt: `Кабинет ${i + 1}`
  }));
}
/* ---------------------------------- */

function formatDuration(minutes) {
  const map = {
    30: "30 мин",
    45: "45 мин",
    60: "60 мин",
    75: "1 ч 15 мин",
    90: "1 ч 30 мин",
    120: "2 ч"
  };
  return map[minutes] || `${minutes} мин`;
}

function buildMessageText({ serviceTitle = "", gift = false }) {
  const city = cityConfigs[currentCity || "moscow"];

  if (gift) {
    return `Здравствуйте! Хочу оформить подарочный сертификат. Город: ${city.label}.`;
  }

  if (serviceTitle) {
    return `Здравствуйте! Хочу записаться на услугу: ${serviceTitle}. Город: ${city.label}.`;
  }

  return `Здравствуйте! Хочу записаться. Город: ${city.label}.`;
}

function buildActionButtons({ serviceTitle = "", gift = false } = {}) {
  const city = cityConfigs[currentCity || "moscow"];
  const messageText = buildMessageText({ serviceTitle, gift });

  const telegramUrl = `${baseLinks.telegram}?text=${encodeURIComponent(messageText)}`;
  const whatsappUrl = `${baseLinks.whatsapp}?text=${encodeURIComponent(messageText)}`;
  const maxUrl = `${baseLinks.max}?text=${encodeURIComponent(messageText)}`;

  return `
    <a class="action-btn primary" href="${city.dikidi}" target="_blank">Онлайн запись</a>
    <a class="action-btn" href="${telegramUrl}" target="_blank">Телеграм</a>
    <a class="action-btn" href="${whatsappUrl}" target="_blank">Вотсап</a>
    <a class="action-btn" href="${maxUrl}" target="_blank">Макс</a>
  `;
}

function renderSlider(trackId, items) {
  const track = document.getElementById(trackId);
  if (!track) return;

  track.innerHTML = items
    .map(
      (item) => `
      <div class="slider-item">
        <img src="${item.src}" alt="${item.alt}">
      </div>
    `
    )
    .join("");
}

/* ---------- ОБНОВЛЕНИЕ ГОРОДА ---------- */
function updateCityDependentContent() {
  const city = cityConfigs[currentCity || "moscow"];

  document.getElementById("mapCityTitle").textContent = city.label;
  document.getElementById("mapAddressText").textContent = city.shortAddress;
  document.getElementById("mapOpenBtn").href = city.yandexMap;
}
/* -------------------------------------- */

/* ---------- ВЫБОР ГОРОДА ---------- */
function selectCity(cityKey) {
  currentCity = cityKey;
  localStorage.setItem(storageKeyCity, cityKey);

  updateCityDependentContent();

  // 🔥 обновляем кабинет
  renderSlider("cabinetSlider", getCabinetImages());

  const overlay = document.getElementById("cityOverlay");
  if (overlay) overlay.classList.add("hidden");
}

function initCitySelection() {
  const overlay = document.getElementById("cityOverlay");

  document.querySelectorAll(".city-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectCity(btn.dataset.city);
    });
  });

  if (currentCity === "moscow" || currentCity === "saratov") {
    updateCityDependentContent();
    renderSlider("cabinetSlider", getCabinetImages());
    if (overlay) overlay.classList.add("hidden");
  } else if (overlay) {
    overlay.classList.remove("hidden");
  }
}
/* ---------------------------------- */

function init() {
  renderSlider("cabinetSlider", getCabinetImages());
  initCitySelection();
}

document.addEventListener("DOMContentLoaded", init);
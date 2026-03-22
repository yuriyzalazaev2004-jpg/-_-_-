const cityConfigs = {
  moscow: {
    label: "Москва",
    badge: "Москва",
    address: "г. Москва, ул. Беговая, д. 6",
    shortAddress: "ул. Беговая, д. 6",
    yandexMap: "https://yandex.ru/maps/?text=Москва, ул. Беговая, д. 6",
    dikidi: "https://dikidi.net/#widget=206531",
    prices: { 45: "3000 ₽", 60: "3500 ₽", 90: "5000 ₽", 120: "6500 ₽" }
  },
  saratov: {
    label: "Саратов",
    badge: "Саратов",
    address: "г. Саратов, ул. Кузнецова, д. 7",
    shortAddress: "ул. Кузнецова, д. 7",
    yandexMap: "https://yandex.ru/maps/?text=Саратов, ул. Кузнецова, д. 7",
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
  max: "https://max.ru/u/f9LHodD0cOLbVHM9ql3WQbXqbwl_xBhF61Ipdc6W-UP6LQ_kdhzG-kq2bZY"
};

let currentCity = localStorage.getItem("tuatara_selected_city") || "";

/* ---------- КАБИНЕТ (НОВОЕ) ---------- */
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
/* ------------------------------------ */

function renderSlider(id, items) {
  const el = document.getElementById(id);
  if (!el) return;

  el.innerHTML = items
    .map(
      (i) => `
      <div class="slider-item">
        <img src="${i.src}" alt="${i.alt}">
      </div>`
    )
    .join("");
}

function updateCity() {
  const city = cityConfigs[currentCity || "moscow"];

  document.getElementById("mapCityTitle").textContent = city.label;
  document.getElementById("mapAddressText").textContent = city.shortAddress;
  document.getElementById("mapOpenBtn").href = city.yandexMap;
}

/* ---------- ВЫБОР ГОРОДА ---------- */
function selectCity(cityKey) {
  currentCity = cityKey;
  localStorage.setItem("tuatara_selected_city", cityKey);

  updateCity();

  // 🔥 обновляем кабинет
  renderSlider("cabinetSlider", getCabinetImages());

  document.getElementById("cityOverlay")?.classList.add("hidden");
}
/* ---------------------------------- */

function initCitySelection() {
  document.querySelectorAll(".city-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectCity(btn.dataset.city);
    });
  });

  if (currentCity) {
    updateCity();
  }
}

function init() {
  renderSlider("cabinetSlider", getCabinetImages());
  initCitySelection();
}

document.addEventListener("DOMContentLoaded", init);
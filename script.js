const cityConfigs = {
  moscow: {
    label: "Москва",
    badge: "Москва",
    address: "г. Москва, ул. Беговая, д. 6",
    shortAddress: "ул. Беговая, д. 6",
    yandexMap:
      "https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%2C%20%D0%B4.%206",
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
      "https://yandex.ru/maps/?text=%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%2C%20%D1%83%D0%BB.%20%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D0%B0%2C%20%D0%B4.%207",
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

const services = [
  {
    title: "Общий массаж всего тела",
    text: "Расслабляет мышцы, снимает напряжение, улучшает кровообращение и общее самочувствие.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [60, 75, 90, 120]
    }
  },
  {
    title: "Массаж тела и лица",
    text: "Комплексный уход для полного расслабления тела и улучшения тонуса кожи лица.",
    durations: {
      moscow: [90, 120],
      saratov: [90, 120]
    }
  },
  {
    title: "Массаж спины",
    text: "Снимает напряжение в области спины, шеи и плеч, помогает уменьшить дискомфорт и усталость.",
    durations: {
      moscow: [45, 60],
      saratov: [30, 45, 60]
    }
  },
  {
    title: "Антицеллюлитный моделирующий массаж",
    text: "Стимулирует кровообращение, улучшает состояние кожи и помогает скорректировать контуры тела.",
    durations: {
      moscow: [45, 60, 90, 120],
      saratov: [45, 60, 75, 90, 120]
    }
  },
  {
    title: "Миофасциальный массаж",
    text: "Глубокая работа с мышцами и фасциями для снятия зажимов и улучшения подвижности тела.",
    durations: {
      moscow: [60, 90],
      saratov: [45, 60, 75, 90]
    }
  },
  {
    title: "Лимфодренажный массаж",
    text: "Активизирует лимфоток, уменьшает отёки и способствует естественному очищению организма.",
    durations: {
      moscow: [60, 90],
      saratov: [60, 75, 90]
    }
  },
  {
    title: "Глубокотканный массаж",
    text: "Интенсивная проработка глубоких слоёв мышц для снятия напряжения и восстановления тканей.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [60, 75, 90, 120]
    }
  },
  {
    title: "Спортивный массаж",
    text: "Помогает мышцам быстрее восстановиться после нагрузок или настроиться на активную тренировку.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [60, 75, 90, 120]
    }
  },
  {
    title: "Антистресс массаж",
    text: "Мягкие техники, снимающие стресс, тревожность и усталость, восстанавливая внутренний баланс.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [60, 75, 90, 120]
    }
  },
  {
    title: "Массаж лица",
    text: "Улучшает тонус кожи, стимулирует кровообращение, профилактика или устранение мелких мимических морщин.",
    durations: {
      moscow: [45, 60],
      saratov: [30, 45, 60]
    }
  }
];

const reviewImages = Array.from({ length: 9 }, (_, i) => ({
  src: `images/reviews/review-${i + 1}.jpg`,
  alt: `Отзыв клиента ${i + 1}`
}));

const resultImages = Array.from({ length: 21 }, (_, i) => ({
  src: `images/results/result-${i + 1}.jpg`,
  alt: `Результат массажа ${i + 1}`
}));

const cabinetImages = Array.from({ length: 4 }, (_, i) => ({
  src: `images/cabinet/cabinet-${i + 1}.jpg`,
  alt: `Кабинет ${i + 1}`
}));

const certImages = Array.from({ length: 18 }, (_, i) => ({
  src: `images/certs/cert-${i + 1}.jpg`,
  alt: `Диплом или сертификат ${i + 1}`
}));

const storageKeyCity = "tuatara_selected_city";
let currentCity = localStorage.getItem(storageKeyCity) || "";

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
    <a class="action-btn primary" href="${city.dikidi}" target="_blank" rel="noopener">Онлайн запись</a>
    <a class="action-btn" href="${telegramUrl}" target="_blank" rel="noopener">Телеграм</a>
    <a class="action-btn" href="${whatsappUrl}" target="_blank" rel="noopener">Вотсап</a>
    <a class="action-btn" href="${maxUrl}" target="_blank" rel="noopener">Макс</a>
  `;
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  const city = cityConfigs[currentCity || "moscow"];

  grid.innerHTML = services
    .map((service, index) => {
      const durations = service.durations[currentCity || "moscow"] || [];

      const priceRows = durations
        .map((minutes) => {
          const price = city.prices[minutes] || "";
          return `
            <div class="service-price-row">
              <span>${formatDuration(minutes)}</span>
              <strong>${price}</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="service-card reveal ${index % 2 ? "reveal-delay-1" : ""}">
          <img
            class="service-photo"
            src="./images/service/service-${index + 1}.jpg"
            alt="${service.title}"
            loading="lazy"
            onerror="this.onerror=null; this.src='./images/hero.jpg';"
          />

          <h3>${service.title}</h3>
          <p>${service.text}</p>

          <div class="service-price-list">
            ${priceRows}
          </div>

          <div class="card-actions">
            ${buildActionButtons({ serviceTitle: service.title })}
          </div>
        </article>
      `;
    })
    .join("");

  initRevealObserver();
}

function updateCityDependentContent() {
  const city = cityConfigs[currentCity || "moscow"];

  const currentCityLabel = document.getElementById("currentCityLabel");
  const heroCityBadge = document.getElementById("heroCityBadge");
  const addressText = document.getElementById("addressText");
  const mapCityTitle = document.getElementById("mapCityTitle");
  const mapAddressText = document.getElementById("mapAddressText");
  const yandexMapLink = document.getElementById("yandexMapLink");
  const mapOpenBtn = document.getElementById("mapOpenBtn");
  const footerCityText = document.getElementById("footerCityText");
  const giftActions = document.getElementById("giftActions");
  const contactActions = document.getElementById("contactActions");
  const topTelegramLink = document.getElementById("topTelegramLink");
  const topWhatsappLink = document.getElementById("topWhatsappLink");
  const topMaxLink = document.getElementById("topMaxLink");
  const stickyActions = document.getElementById("stickyActions");

  if (currentCityLabel) currentCityLabel.textContent = city.label;
  if (heroCityBadge) heroCityBadge.textContent = city.badge;
  if (addressText) addressText.textContent = city.address;
  if (mapCityTitle) mapCityTitle.textContent = city.label;
  if (mapAddressText) mapAddressText.textContent = city.shortAddress;
  if (yandexMapLink) yandexMapLink.href = city.yandexMap;
  if (mapOpenBtn) mapOpenBtn.href = city.yandexMap;
  if (footerCityText) footerCityText.textContent = city.label;
  if (giftActions) giftActions.innerHTML = buildActionButtons({ gift: true });
  if (contactActions) contactActions.innerHTML = buildActionButtons({});
  if (stickyActions) stickyActions.innerHTML = buildActionButtons({});

  const commonMessage = buildMessageText({});
  if (topTelegramLink) {
    topTelegramLink.href = `${baseLinks.telegram}?text=${encodeURIComponent(commonMessage)}`;
  }
  if (topWhatsappLink) {
    topWhatsappLink.href = `${baseLinks.whatsapp}?text=${encodeURIComponent(commonMessage)}`;
  }
  if (topMaxLink) {
    topMaxLink.href = `${baseLinks.max}?text=${encodeURIComponent(commonMessage)}`;
  }
}

function renderSlider(trackId, items) {
  const track = document.getElementById(trackId);
  if (!track) return;

  track.innerHTML = items
    .map(
      (item) => `
        <div class="slider-item">
          <img src="${item.src}" alt="${item.alt}" data-lightbox="${item.src}" />
        </div>
      `
    )
    .join("");
}

function initSliderButtons() {
  document.querySelectorAll("[data-slider-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.sliderPrev);
      if (!track) return;

      track.scrollBy({
        left: -track.clientWidth * 0.85,
        behavior: "smooth"
      });
    });
  });

  document.querySelectorAll("[data-slider-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.sliderNext);
      if (!track) return;

      track.scrollBy({
        left: track.clientWidth * 0.85,
        behavior: "smooth"
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImage || !lightboxClose) return;

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-lightbox]");
    if (!target) return;

    lightboxImage.src = target.dataset.lightbox;
    lightboxImage.alt = target.alt || "Изображение";
    lightbox.classList.add("open");
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightboxImage.src = "";
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    }
  });
}

function initBurgerMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav");

  if (!burgerBtn || !nav) return;

  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

function initRevealObserver() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

function selectCity(cityKey) {
  currentCity = cityKey;
  localStorage.setItem(storageKeyCity, cityKey);
  updateCityDependentContent();
  renderServices();

  const overlay = document.getElementById("cityOverlay");
  if (overlay) overlay.classList.add("hidden");
}

function initCitySelection() {
  const overlay = document.getElementById("cityOverlay");
  const changeCityBtn = document.getElementById("changeCityBtn");

  document.querySelectorAll(".city-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectCity(btn.dataset.city);
    });
  });

  if (changeCityBtn && overlay) {
    changeCityBtn.addEventListener("click", () => {
      overlay.classList.remove("hidden");
    });
  }

  if (currentCity === "moscow" || currentCity === "saratov") {
    updateCityDependentContent();
    renderServices();
    if (overlay) overlay.classList.add("hidden");
  } else if (overlay) {
    overlay.classList.remove("hidden");
  }
}

function initTallyEmbeds() {
  const iframes = document.querySelectorAll("iframe[data-tally-src]");
  iframes.forEach((iframe) => {
    if (!iframe.src) {
      iframe.src = iframe.dataset.tallySrc;
    }
  });
}

function init() {
  renderSlider("reviewsSlider", reviewImages);
  renderSlider("resultsSlider", resultImages);
  renderSlider("cabinetSlider", cabinetImages);
  renderSlider("certsSlider", certImages);

  initSliderButtons();
  initLightbox();
  initBurgerMenu();
  initRevealObserver();
  initCitySelection();
  initTallyEmbeds();
}

document.addEventListener("DOMContentLoaded", init);
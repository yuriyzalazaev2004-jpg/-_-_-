const FIREBASE_ENABLED = false;

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const cityConfigs = {
  moscow: {
    label: "Москва",
    badge: "Москва",
    address: "г. Москва, ул. Беговая, д. 6",
    shortAddress: "ул. Беговая, д. 6",
    yandexMap: "https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB.%20%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F%2C%20%D0%B4.%206",
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
    yandexMap: "https://yandex.ru/maps/?text=%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%2C%20%D1%83%D0%BB.%20%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D0%B0%2C%20%D0%B4.%207",
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
      saratov: [75, 90, 120]
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
    category: "Коррекция фигуры",
    text: "Стимулирует кровообращение, улучшает состояние кожи и помогает скорректировать контуры тела.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [60, 75, 90, 120]
    }
  },
  {
    title: "Миофасциальный массаж",
    category: "Коррекция фигуры",
    text: "Глубокая работа с мышцами и фасциями для снятия зажимов и улучшения подвижности тела.",
    durations: {
      moscow: [60, 90],
      saratov: [45, 60, 75, 90]
    }
  },
  {
    title: "Лимфодренажный массаж",
    category: "Коррекция фигуры",
    text: "Активизирует лимфоток, уменьшает отёки и способствует естественному очищению организма.",
    durations: {
      moscow: [60, 90],
      saratov: [45, 60, 75, 90]
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
      saratov: [45, 60, 75, 90, 120]
    }
  },
  {
    title: "Антистресс массаж",
    text: "Мягкие техники, снимающие стресс, тревожность и усталость, восстанавливая внутренний баланс.",
    durations: {
      moscow: [60, 90, 120],
      saratov: [45, 60, 75, 90, 120]
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

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

function buildActionButtons({ serviceTitle = "", gift = false } = {}) {
  const city = cityConfigs[currentCity || "moscow"];
  const telegramText = gift
    ? `Здравствуйте! Хочу оформить подарочный сертификат в городе ${city.label}.`
    : `Здравствуйте! Хочу записаться на услугу: ${serviceTitle}. Город: ${city.label}.`;

  const whatsappText = telegramText;
  const maxText = telegramText;

  const telegramUrl = `${baseLinks.telegram}?text=${encodeURIComponent(telegramText)}`;
  const whatsappUrl = `${baseLinks.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  const maxUrl = `${baseLinks.max}?text=${encodeURIComponent(maxText)}`;

  return `
    <a class="action-btn primary" href="${city.dikidi}">Онлайн запись</a>
    <a class="action-btn" href="${telegramUrl}" target="_blank" rel="noopener">Телеграм</a>
    <a class="action-btn" href="${whatsappUrl}" target="_blank" rel="noopener">Вотсап</a>
    <a class="action-btn" href="${maxUrl}" target="_blank" rel="noopener">Макс</a>
  `;
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  const city = cityConfigs[currentCity || "moscow"];

  grid.innerHTML = services.map((service, index) => {
    const durations = service.durations[currentCity || "moscow"] || [];
    const priceRows = durations.map((minutes) => {
      const price = city.prices[minutes] || "";
      return `
        <div class="service-price-row">
          <span>${formatDuration(minutes)}</span>
          <strong>${price}</strong>
        </div>
      `;
    }).join("");

    return `
      <article class="service-card reveal ${index % 2 ? "reveal-delay-1" : ""}">
        <img
          class="service-photo"
          src="./images/service/service-${index + 1}.jpg"
          alt="${service.title}"
          loading="lazy"
          onerror="this.onerror=null; this.src='./images/hero.jpg';"
        />

        ${service.category ? `<div class="service-category">${service.category}</div>` : ""}
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
  }).join("");

  initRevealObserver();
}

function updateCityDependentContent() {
  const city = cityConfigs[currentCity || "moscow"];
  document.getElementById("currentCityLabel").textContent = city.label;
  document.getElementById("heroCityBadge").textContent = city.badge;
  document.getElementById("addressText").textContent = city.address;
  document.getElementById("mapCityTitle").textContent = city.label;
  document.getElementById("mapAddressText").textContent = city.shortAddress;
  document.getElementById("yandexMapLink").href = city.yandexMap;
  document.getElementById("mapOpenBtn").href = city.yandexMap;
  document.getElementById("footerCityText").textContent = city.label;
  document.getElementById("giftActions").innerHTML = buildActionButtons({ gift: true });
  document.getElementById("contactActions").innerHTML = buildActionButtons({});

  document.getElementById("topTelegramLink").href =
    `${baseLinks.telegram}?text=${encodeURIComponent(`Здравствуйте! Хочу записаться. Город: ${city.label}.`)}`;
  document.getElementById("topWhatsappLink").href =
    `${baseLinks.whatsapp}?text=${encodeURIComponent(`Здравствуйте! Хочу записаться. Город: ${city.label}.`)}`;
  document.getElementById("topMaxLink").href =
    `${baseLinks.max}?text=${encodeURIComponent(`Здравствуйте! Хочу записаться. Город: ${city.label}.`)}`;

  document.getElementById("stickyActions").innerHTML = buildActionButtons({});
}

function renderSlider(trackId, items) {
  const track = document.getElementById(trackId);
  if (!track) return;

  track.innerHTML = items.map((item) => `
    <div class="slider-item">
      <img src="${item.src}" alt="${item.alt}" data-lightbox="${item.src}" />
    </div>
  `).join("");
}

function initSliderButtons() {
  document.querySelectorAll("[data-slider-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.sliderPrev);
      if (!track) return;
      track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-slider-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = document.getElementById(button.dataset.sliderNext);
      if (!track) return;
      track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");

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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

const LOCAL_REVIEW_STORAGE_KEY = "tautara_local_reviews";

function getLocalReviews() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_REVIEW_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalReview(review) {
  const current = getLocalReviews();
  const updated = [review, ...current].slice(0, 50);
  localStorage.setItem(LOCAL_REVIEW_STORAGE_KEY, JSON.stringify(updated));
}

function renderLocalReviews() {
  const userReviews = document.getElementById("userReviews");
  const reviewStatus = document.getElementById("reviewStatus");
  if (!userReviews) return;

  const reviews = getLocalReviews();

  reviewStatus.textContent =
    "Сейчас работает локальный режим. Чтобы отзывы видели все пользователи, подключите Firebase в script.js.";

  if (!reviews.length) {
    userReviews.innerHTML = `<div class="muted">Пока отзывов нет. Будьте первым(ой).</div>`;
    return;
  }

  userReviews.innerHTML = reviews.map((item) => `
    <div class="user-review">
      <strong>${escapeHtml(item.name)}</strong>
      <div>${escapeHtml(item.message)}</div>
    </div>
  `).join("");
}

function initLocalReviewForm() {
  const form = document.getElementById("reviewForm");
  const submitBtn = document.getElementById("reviewSubmitBtn");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("reviewName");
    const messageInput = document.getElementById("reviewMessage");

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Отправка...";

    saveLocalReview({ name, message, createdAt: Date.now() });

    form.reset();
    renderLocalReviews();

    submitBtn.disabled = false;
    submitBtn.textContent = "Отправить отзыв";
    alert("Отзыв добавлен. Сейчас он сохраняется локально в браузере.");
  });
}

async function initFirebaseReviews() {
  const reviewStatus = document.getElementById("reviewStatus");
  const userReviews = document.getElementById("userReviews");
  const form = document.getElementById("reviewForm");
  const submitBtn = document.getElementById("reviewSubmitBtn");

  if (!reviewStatus || !userReviews || !form) return;

  try {
    const firebaseAppModule = await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js");
    const firestoreModule = await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js");

    const { initializeApp } = firebaseAppModule;
    const {
      getFirestore,
      collection,
      addDoc,
      query,
      orderBy,
      onSnapshot,
      serverTimestamp
    } = firestoreModule;

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    reviewStatus.textContent = "Отзывы сохраняются в базе данных и видны всем пользователям.";

    const reviewsQuery = query(collection(db, "reviews"), orderBy("createdAt", "desc"));

    onSnapshot(reviewsQuery, (snapshot) => {
      if (snapshot.empty) {
        userReviews.innerHTML = `<div class="muted">Пока отзывов нет. Будьте первым(ой).</div>`;
        return;
      }

      userReviews.innerHTML = snapshot.docs.map((doc) => {
        const data = doc.data();
        return `
          <div class="user-review">
            <strong>${escapeHtml(data.name || "Гость")}</strong>
            <div>${escapeHtml(data.message || "")}</div>
          </div>
        `;
      }).join("");
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("reviewName");
      const messageInput = document.getElementById("reviewMessage");

      const name = nameInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !message) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Отправка...";

      try {
        await addDoc(collection(db, "reviews"), {
          name,
          message,
          createdAt: serverTimestamp()
        });

        form.reset();
      } catch (error) {
        console.error(error);
        alert("Не удалось отправить отзыв. Проверьте настройки Firebase.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Отправить отзыв";
      }
    });
  } catch (error) {
    console.error(error);
    reviewStatus.textContent =
      "Firebase не удалось подключить. Включён локальный режим отзывов.";
    renderLocalReviews();
    initLocalReviewForm();
  }
}

function initReviews() {
  if (FIREBASE_ENABLED) {
    initFirebaseReviews();
  } else {
    renderLocalReviews();
    initLocalReviewForm();
  }
}

function selectCity(cityKey) {
  currentCity = cityKey;
  localStorage.setItem(storageKeyCity, cityKey);
  updateCityDependentContent();
  renderServices();
  document.getElementById("cityOverlay").classList.add("hidden");
}

function initCitySelection() {
  const overlay = document.getElementById("cityOverlay");

  document.querySelectorAll(".city-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectCity(btn.dataset.city);
    });
  });

  document.getElementById("changeCityBtn").addEventListener("click", () => {
    overlay.classList.remove("hidden");
  });

  if (currentCity === "moscow" || currentCity === "saratov") {
    updateCityDependentContent();
    renderServices();
    overlay.classList.add("hidden");
  } else {
    overlay.classList.remove("hidden");
  }
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
  initReviews();
  initCitySelection();
}

document.addEventListener("DOMContentLoaded", init);
const telegramBookingLink = "https://t.me/elena_tuatara_massag";
const whatsappLink = "https://wa.me/79042406833";

const FIREBASE_ENABLED = false;

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const services = [
  {
    title: "Общий массаж всего тела",
    text: "Расслабляет мышцы, снимает напряжение, улучшает кровообращение и общее самочувствие."
  },
  {
    title: "Массаж тела и лица",
    text: "Комплексный уход для полного расслабления тела и улучшения тонуса кожи лица."
  },
  {
    title: "Массаж спины",
    text: "Снимает напряжение в области спины, шеи и плеч, помогает уменьшить дискомфорт и усталость."
  },
  {
    title: "Антицеллюлитный моделирующий массаж",
    category: "Коррекция фигуры",
    text: "Стимулирует кровообращение, улучшает состояние кожи и помогает скорректировать контуры тела."
  },
  {
    title: "Миофасциальный массаж",
    category: "Коррекция фигуры",
    text: "Глубокая работа с мышцами и фасциями для снятия зажимов и улучшения подвижности тела."
  },
  {
    title: "Лимфодренажный массаж",
    category: "Коррекция фигуры",
    text: "Активизирует лимфоток, уменьшает отёки и способствует естественному очищению организма."
  },
  {
    title: "Глубокотканный массаж",
    text: "Интенсивная проработка глубоких слоёв мышц для снятия напряжения и восстановления тканей."
  },
  {
    title: "Спортивный массаж",
    text: "Помогает мышцам быстрее восстановиться после нагрузок или настроиться на активную тренировку."
  },
  {
    title: "Антистресс массаж",
    text: "Мягкие техники, снимающие стресс, тревожность и усталость, восстанавливая внутренний баланс."
  },
  {
    title: "Массаж лица",
    text: "Улучшает тонус кожи, стимулирует кровообращение, профилактика или устранение мелких мимических морщин."
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

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services.map((service, index) => {
    const telegramUrl =
      `${telegramBookingLink}?text=` +
      encodeURIComponent(`Здравствуйте! Хочу записаться на услугу: ${service.title}`);

    const whatsappUrl =
      `${whatsappLink}?text=` +
      encodeURIComponent(`Здравствуйте! Хочу записаться на услугу: ${service.title}`);

    const hiddenClass = index >= 3 ? "hidden-service" : "";
    const delayClass = index % 2 === 0 ? "" : "reveal-delay-1";
    const serviceImagePath = `./images/service/service-${index + 1}.jpg`;

    return `
      <article class="service-card reveal ${delayClass} ${hiddenClass}">
        <img
          class="service-photo"
          src="${serviceImagePath}"
          alt="${service.title}"
          loading="lazy"
          onerror="this.onerror=null; this.src='./images/hero.jpg';"
        />

        ${service.category ? `<div class="service-category">${service.category}</div>` : ""}

        <h3>${service.title}</h3>
        <p>${service.text}</p>

        <div class="service-actions">
          <a class="btn btn-primary" href="${telegramUrl}" target="_blank" rel="noopener">
            Запись
          </a>
          <a class="btn btn-secondary" href="${whatsappUrl}" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </article>
    `;
  }).join("");

  initRevealObserver();
  initShowMore();
}

function initShowMore() {
  const btn = document.getElementById("showMoreBtn");
  if (!btn) return;

  const hiddenCards = [...document.querySelectorAll(".hidden-service")];

  if (!hiddenCards.length) {
    btn.style.display = "none";
    return;
  }

  btn.addEventListener("click", () => {
    hiddenCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
        card.classList.add("active");
      }, index * 70);
    });

    btn.style.display = "none";
  });
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
  }, {
    threshold: 0.12
  });

  elements.forEach((el) => {
    if (!el.classList.contains("hidden-service")) {
      observer.observe(el);
    }
  });
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

    saveLocalReview({
      name,
      message,
      createdAt: Date.now()
    });

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

function init() {
  renderServices();

  renderSlider("reviewsSlider", reviewImages);
  renderSlider("resultsSlider", resultImages);
  renderSlider("cabinetSlider", cabinetImages);
  renderSlider("certsSlider", certImages);

  initSliderButtons();
  initLightbox();
  initBurgerMenu();
  initRevealObserver();
  initReviews();
}

document.addEventListener("DOMContentLoaded", init);
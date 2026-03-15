import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ВСТАВЬ_СВОЙ_API_KEY",
  authDomain: "ВСТАВЬ_СВОЙ_AUTH_DOMAIN",
  projectId: "ВСТАВЬ_СВОЙ_PROJECT_ID",
  storageBucket: "ВСТАВЬ_СВОЙ_STORAGE_BUCKET",
  messagingSenderId: "ВСТАВЬ_СВОЙ_MESSAGING_SENDER_ID",
  appId: "ВСТАВЬ_СВОЙ_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const telegramBookingLink = "https://t.me/elena_tuatara_massag";
const whatsappLink = "https://wa.me/79042406833";

const services = [
  {
    title: "Общий массаж всего тела",
    text: "Расслабляет мышцы, снимает напряжение, улучшает кровообращение и общее самочувствие.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "60 / 90 / 120 мин"
  },
  {
    title: "Массаж тела и лица",
    text: "Комплексный уход для полного расслабления тела и улучшения тонуса кожи лица.",
    durations: ["90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "90 / 120 мин"
  },
  {
    title: "Массаж спины",
    text: "Снимает напряжение в области спины, шеи и плеч, помогает уменьшить дискомфорт и усталость.",
    durations: ["60 мин — 3500 ₽"],
    shortTime: "60 мин"
  },
  {
    title: "Антицеллюлитный моделирующий массаж",
    category: "Коррекция фигуры",
    text: "Стимулирует кровообращение, улучшает состояние кожи и помогает скорректировать контуры тела.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "60 / 90 / 120 мин"
  },
  {
    title: "Миофасциальный массаж",
    category: "Коррекция фигуры",
    text: "Глубокая работа с мышцами и фасциями для снятия зажимов и улучшения подвижности тела.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽"],
    shortTime: "60 / 90 мин"
  },
  {
    title: "Лимфодренажный массаж",
    category: "Коррекция фигуры",
    text: "Активизирует лимфоток, уменьшает отёки и способствует естественному очищению организма.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽"],
    shortTime: "60 / 90 мин"
  },
  {
    title: "Глубокотканный массаж",
    text: "Интенсивная проработка глубоких слоёв мышц для снятия напряжения и восстановления тканей.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "60 / 90 / 120 мин"
  },
  {
    title: "Спортивный массаж",
    text: "Помогает мышцам быстрее восстановиться после нагрузок или настроиться на активную тренировку.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "60 / 90 / 120 мин"
  },
  {
    title: "Антистресс массаж",
    text: "Мягкие техники, снимающие стресс, тревожность и усталость, восстанавливая внутренний баланс.",
    durations: ["60 мин — 3500 ₽", "90 мин — 5000 ₽", "120 мин — 6500 ₽"],
    shortTime: "60 / 90 / 120 мин"
  },
  {
    title: "Массаж лица",
    text: "Улучшает тонус кожи, стимулирует кровообращение, профилактика или устранение мелких мимических морщин.",
    durations: ["60 мин — 3500 ₽"],
    shortTime: "60 мин"
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

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services.map((service) => {
    const telegramUrl =
      `${telegramBookingLink}?text=` +
      encodeURIComponent(`Здравствуйте! Хочу записаться на услугу: ${service.title}`);

    const whatsappUrl =
      `${whatsappLink}?text=` +
      encodeURIComponent(`Здравствуйте! Хочу записаться на услугу: ${service.title}`);

    return `
      <article class="service-card">
        ${service.category ? `<div class="service-category">${service.category}</div>` : ""}
        <h3>${service.title}</h3>
        <p>${service.text}</p>

        <div class="service-meta">
          <span class="service-time">${service.shortTime}</span>
        </div>

        <div class="service-price-list">
          ${service.durations.map(item => `<div class="service-price-row">${item}</div>`).join("")}
        </div>

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

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initReviewsRealtime() {
  const userReviews = document.getElementById("userReviews");
  if (!userReviews) return;

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
}

function initReviewForm() {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("reviewName");
    const messageInput = document.getElementById("reviewMessage");

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) return;

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Отправка...";

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        message,
        createdAt: serverTimestamp()
      });

      form.reset();
      alert("Спасибо! Ваш отзыв отправлен.");
    } catch (error) {
      console.error(error);
      alert("Не удалось отправить отзыв. Проверьте настройки Firebase.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Отправить отзыв";
    }
  });
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
  initReviewsRealtime();
  initReviewForm();
}

document.addEventListener("DOMContentLoaded", init);
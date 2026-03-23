// ПОЛНОСТЬЮ ИСПРАВЛЕННЫЙ script.js

let currentCity = localStorage.getItem("city") || null;

const overlay = document.getElementById("cityOverlay");
const cityLabel = document.getElementById("currentCityLabel");
const changeCityBtn = document.getElementById("changeCityBtn");

// выбор города
function selectCity(city) {
  currentCity = city;
  localStorage.setItem("city", city);

  if (cityLabel) {
    cityLabel.textContent = city === "moscow" ? "Москва" : "Саратов";
  }

  if (overlay) {
    overlay.classList.add("hidden");
  }

  if (typeof updateCityDependentContent === "function") updateCityDependentContent();
  if (typeof renderServices === "function") renderServices();
  if (typeof renderSlider === "function" && typeof getCabinetImages === "function") {
    renderSlider("cabinetSlider", getCabinetImages());
  }
}

// кнопки Москва / Саратов
document.querySelectorAll(".city-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectCity(btn.dataset.city);
  });
});

// открыть выбор города
if (changeCityBtn) {
  changeCityBtn.addEventListener("click", () => {
    if (overlay) overlay.classList.remove("hidden");
  });
}

// при загрузке
window.addEventListener("DOMContentLoaded", () => {
  if (!currentCity) {
    if (overlay) overlay.classList.remove("hidden");
  } else {
    if (cityLabel) {
      cityLabel.textContent = currentCity === "moscow" ? "Москва" : "Саратов";
    }
    if (typeof updateCityDependentContent === "function") updateCityDependentContent();
    if (typeof renderServices === "function") renderServices();
    if (typeof renderSlider === "function" && typeof getCabinetImages === "function") {
      renderSlider("cabinetSlider", getCabinetImages());
    }
  }
});

// 🔥 фикс: сайт всегда открывается сверху
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }
  window.scrollTo(0, 0);
});

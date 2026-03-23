let currentCity = "moscow";

const label = document.getElementById("currentCityLabel");
const overlay = document.getElementById("cityOverlay");

document.getElementById("changeCityBtn").onclick = () => {
  overlay.classList.remove("hidden");
};

document.querySelectorAll(".city-btn").forEach(btn=>{
  btn.onclick = () => {
    currentCity = btn.dataset.city;
    label.textContent = currentCity === "moscow" ? "Москва" : "Саратов";
    overlay.classList.add("hidden");
  }
});

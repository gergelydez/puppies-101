const modal = document.querySelector(".modal");
const modalMsg = document.querySelector(".modal__msg");
const closeModalBtn = document.querySelector(".btn__close-modal");
const overlay = document.querySelector(".overlay");
const link = document.querySelector(".link");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
link.addEventListener("click", openModal);

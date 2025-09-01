const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea");
const submitBtn = document.getElementById("submitBtn");

// Validation en temps réel
inputs.forEach(input => {
  input.addEventListener("input", () => validateField(input));
});

function validateField(input) {
  const errorEl = input.parentElement.querySelector(".error");
  if (!input.value.trim()) {
    errorEl.textContent = "Ce champ est requis";
    return false;
  }
  if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    errorEl.textContent = "Email invalide";
    return false;
  }
  errorEl.textContent = "";
  return true;
}

// Soumission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  inputs.forEach(input => {
    if (!validateField(input)) valid = false;
  });

  if (!valid) return;

  // Animation bouton
  submitBtn.textContent = "Envoi...";
  submitBtn.disabled = true;
  submitBtn.classList.add("loading");

  setTimeout(() => {
    submitBtn.textContent = "Envoyer";
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");

    showModal("Votre message a bien été envoyé !");
    form.reset();
  }, 1500);
});

// Création de la modale
function showModal(message) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <p>${message}</p>
      <button>Fermer</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector("button");
  closeBtn.addEventListener("click", () => modal.remove());

  // Fermer en cliquant en dehors
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

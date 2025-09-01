const avisData = [
    { nom:"Jean", texte:"Superbe carte, très utile pour mes déplacements en ville.", note: "5/5"},
    { nom:"Marie", texte:"Je l'utilise tous les jours, elle est très pratique et fiable.",note: "5/5"},
    { nom:"Paul", texte:"Bonne qualité, mais un peu chère à mon goût.", note: "5/5"},
    { nom:"Sophie", texte:"Design élégant et facile à utiliser, je la recommande vivement.", note: "5/5"},
    { nom:"Luc", texte:"Fonctionne parfaitement, je n'ai jamais eu de problème avec.", note: "5/5"}
];


const carousel = document.getElementById("carousel");
const template = document.getElementById("avis-template");

function ajouterAvis(avis) {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".nom-client").textContent = avis.nom;
    clone.querySelector(".avis-texte").textContent = avis.texte;
    clone.querySelector(".avis-note").textContent = avis.note;
    carousel.appendChild(clone);
}


avisData.forEach(avis => ajouterAvis(avis));

let index = 0;
const slides = carousel.querySelectorAll(".avis");
const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");

function updateCarousel() {
    const offset = -index * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

const form = document.getElementById("avis-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const texte = document.getElementById("texte").value;
    const note = document.getElementById("note").value;

    const nouvelAvis = { nom, texte, note };
    ajouterAvis(nouvelAvis);

    
    slides = carousel.querySelectorAll(".avis");

    
    form.reset();
});
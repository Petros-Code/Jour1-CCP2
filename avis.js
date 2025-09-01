const avisData = [
    { nom:"Jean", texte:"Superbe carte, très utile pour mes déplacements en ville.", note: "5/5"},
    { nom:"Marie", texte:"Je l'utilise tous les jours, elle est très pratique et fiable.",note: "5/5"},
    { nom:"Paul", texte:"Bonne qualité, mais un peu chère à mon goût.", note: "5/5"},
    { nom:"Sophie", texte:"Design élégant et facile à utiliser, je la recommande vivement.", note: "5/5"},
    { nom:"Luc", texte:"Fonctionne parfaitement, je n'ai jamais eu de problème avec.", note: "5/5"}
];

const container = document.getElementById("avis-clients");
const template = document.getElementById("avis-template");

avisData.forEach(avis=>{
    const clone = template.content.cloneNode(true);
    clone.querySelector(".nom-client").textContent = avis.nom;
    clone.querySelector(".avis-texte").textContent = avis.texte;
    clone.querySelector(".avis-note").textContent = avis.note;
    container.appendChild(clone);

})


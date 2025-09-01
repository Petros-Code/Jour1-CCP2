const prixDeBase = {
    base: 800,
    pigeon: 870,
    pro: 900,
    premium: 1000,
    prestige: 8002
};

const prixCouleurs = {
    noir: 0,
    blanc: 10,
    bleu: 20,
    rouge: 30,
    "arc-en-ciel": 80,
};

let versionChoisie = "base";
let couleurChoisie = "noir";
let optionSelectionnees = {
    garantie:false,
    accessoires:false,
    livraison:false,
    ultime:false
};

function calculerPrixTotal() {
    let prixTotal = prixDeBase[versionChoisie];
    prixTotal += prixCouleurs[couleurChoisie];
    
    if (optionSelectionnees.garantie) {
        prixTotal += 49;
}
     if (optionSelectionnees.accessoires) {
    prixTotal += 29;
}
    if (optionSelectionnees.livraison) {
    prixTotal += 9;
}
    if (optionSelectionnees.ultime) {
        prixTotal += 900;
}

document.getElementById('prix-total').textContent = prixTotal;

}
const boutonsCouleur = document.querySelectorAll('.option-couleur');
boutonsCouleur.forEach(bouton => {
  bouton.addEventListener('click', function() {
    boutonsCouleur.forEach(b => b.classList.remove('active'));

    this.classList.add('active');
    couleurChoisie = this.getAttribute('data-couleur');
    calculerPrixTotal();
  });
});


const selectVersion = document.getElementById('selection-version');
selectVersion.addEventListener('change', function() {
  versionChoisie = this.value;
  calculerPrixTotal();
});


const casesOptions = document.querySelectorAll('.options-case input[type="checkbox"]');
casesOptions.forEach(caseOption => {
  caseOption.addEventListener('change', function() {
    const option = this.getAttribute('data-option');
    optionSelectionnees[option] = this.checked;
    calculerPrixTotal();
  });
});


window.addEventListener('DOMContentLoaded', function() {

  calculerPrixTotal();


  if (boutonsCouleur.length > 0) {
    boutonsCouleur[0].classList.add('active');
  }
});
   



const faqs = [
    { question: "Quels sont vos horaires d'ouverture ?", answer: "Nous sommes ouverts du lundi au samedi de 9h à 19h." },
    { question: "Proposez-vous la livraison ?", answer: "Oui, livraison gratuite à partir de 50€ d'achat." },
    { question: "Comment puis-je suivre ma commande ?", answer: "Un numéro de suivi vous est envoyé par email après expédition." },
    { question: "Quels modes de paiement acceptez-vous ?", answer: "Carte bancaire, PayPal et virement bancaire." },
    { question: "Puis-je retourner un article ?", answer: "Oui, sous 14 jours pour un article non utilisé." }
];

const faqList = document.getElementById("faqList");


faqs.forEach((faq) => {
    const item = document.createElement("div");
    item.classList.add("faq-item");

    const question = document.createElement("div");
    question.classList.add("faq-question");
    question.innerHTML = `
    <span>${faq.question}</span>
    <span class="faq-icon">▶</span>
  `;

    const answer = document.createElement("div");
    answer.classList.add("faq-answer");
    answer.innerText = faq.answer;

    question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("open");
        document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
        document.querySelectorAll(".faq-icon").forEach(icon => icon.classList.remove("open"));
        
        if (!isOpen) {
        answer.classList.add("open");
        question.querySelector(".faq-icon").classList.add("open");
        }
        });

    item.appendChild(question);
    item.appendChild(answer);
    faqList.appendChild(item);
});



// function closeAllFAQ(exceptBloc = null) {
//     const blocs = document.querySelectorAll('.faq_bloc');

//     blocs.forEach(bloc => {
//         if (bloc !== exceptBloc) {
//             bloc.classList.remove('active');
//             bloc.querySelector('.faq_answer-bloc').style.height = '0';
//         }
//     });
// }

// function toggleFAQ(bloc) {
//     const isOpen = bloc.classList.contains('active');
//     const wrapper = bloc.querySelector('.faq_answer-bloc');
//     const content = bloc.querySelector('.faq_answer');

//     if (isOpen) {
//         bloc.classList.remove('active');
//         wrapper.style.height = '0';
//     } else {
//         closeAllFAQ(bloc);
//         bloc.classList.add('active');
//         wrapper.style.height = content.clientHeight + 'px';
//     }
// }

// function initFAQ() {
//     const blocs = document.querySelectorAll('.faq_bloc');

//     blocs.forEach(bloc => {
//         const title = bloc.querySelector('.faq_title');
//         title.addEventListener('click', () => toggleFAQ(bloc));

//         // Ouverture initiale
//         if (bloc.classList.contains('active')) {
//             const wrapper = bloc.querySelector('.faq_answer-bloc');
//             const content = bloc.querySelector('.faq_answer');
//             wrapper.style.height = content.clientHeight + 'px';
//         }
//     });
// }

// // Initialisation
// initFAQ();
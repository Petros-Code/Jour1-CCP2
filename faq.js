

function closeAllFAQ(exceptBloc = null) {
    const blocs = document.querySelectorAll('.faq_bloc');

    blocs.forEach(bloc => {
        if (bloc !== exceptBloc) {
            bloc.classList.remove('active');
            bloc.querySelector('.faq_answer-bloc').style.height = '0';
        }
    });
}

function toggleFAQ(bloc) {
    const isOpen = bloc.classList.contains('active');
    const wrapper = bloc.querySelector('.faq_answer-bloc');
    const content = bloc.querySelector('.faq_answer');

    if (isOpen) {
        bloc.classList.remove('active');
        wrapper.style.height = '0';
    } else {
        closeAllFAQ(bloc);
        bloc.classList.add('active');
        wrapper.style.height = content.clientHeight + 'px';
    }
}

function initFAQ() {
    const blocs = document.querySelectorAll('.faq_bloc');

    blocs.forEach(bloc => {
        const title = bloc.querySelector('.faq_title');
        title.addEventListener('click', () => toggleFAQ(bloc));

        // Ouverture initiale
        if (bloc.classList.contains('active')) {
            const wrapper = bloc.querySelector('.faq_answer-bloc');
            const content = bloc.querySelector('.faq_answer');
            wrapper.style.height = content.clientHeight + 'px';
        }
    });
}

// Initialisation
initFAQ();
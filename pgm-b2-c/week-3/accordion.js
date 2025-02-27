function toggleItem($button) {
    const expanded = $button.getAttribute('aria-expanded') === 'true';

    $button.setAttribute('aria-expanded', (!expanded).toString());
}

function initAccordion() {
    const $buttons = document.querySelectorAll('button[aria-controls]');

    $buttons.forEach($button => {
        $button.addEventListener('click', () => toggleItem($button));
    });
}

initAccordion();
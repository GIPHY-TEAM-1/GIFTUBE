import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { q } from './events/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            loadPage(event.target.getAttribute('data-page'));
        }
    });

    loadPage(HOME);
});
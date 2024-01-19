export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active state for the navigation links based on the specified page.
 *
 * @param {string} page - The page for which the navigation link should be set as active.
 * @returns {void} No explicit return value.
 */
export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');

    Array
        .from(navs)
        .forEach(element => element
            .getAttribute('data-page') === page
            ? element.classList.add('active')
            : element.classList.remove('active')
        );
};
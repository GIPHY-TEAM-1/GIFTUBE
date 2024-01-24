/**
 * Array containing information about uploaded items.
 * Initialized with data retrieved from the 'uploads' key in localStorage, or an empty array if no data is present.
 *
 * @type {Array}
 */
export const uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Adds the specified GIF ID to the list of uploaded GIFs and updates the local storage.
 *
 * @param {string} id - The ID of the GIF to be added to the uploaded list.
 * @returns {void}
 */
export const uploadGif = (id) => {
    uploads.push(id);
    localStorage.setItem('uploads', JSON.stringify(uploads));
};

/**
 * Retrieves a copy of the uploads array in reverse order.
 *
 * @returns {Array} - A reversed copy of the uploads array containing information about uploaded items.
 * @see uploads
 */
export const getUploads = () => [...uploads].reverse();

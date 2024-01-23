/**
 * Array containing information about uploaded items.
 * Initialized with data retrieved from the 'uploads' key in localStorage, or an empty array if no data is present.
 *
 * @type {Array}
 */
export const uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Adds information about an uploaded GIF to the uploads array and stores it in localStorage.
 *
 * @param {Object} response - Information about the uploaded GIF.
 */
export const uploadGif = (response) => {
    uploads.push(response);
    localStorage.setItem('uploads', JSON.stringify(uploads));
};

/**
 * Retrieves a copy of the uploads array in reverse order.
 *
 * @returns {Array} - A reversed copy of the uploads array containing information about uploaded items.
 * @see uploads
 */
export const getUploads = () => [...uploads].reverse();

import { uploadGif } from '../data/uploads.js';
import { q } from './helpers.js';

/**
 * Initiates a POST request to upload a GIF file using the specified API.
 *
 * @async
 * @function
 * @param {File} file - The GIF file to be uploaded.
 * @param {string} api - The API endpoint for uploading the GIF file.
 * @returns {Promise<void>}
 *
 * @example
 * // Example usage:
 * const fileInput = document.getElementById('file-input');
 * const file = fileInput.files[0];
 * const uploadApi = 'https://example.com/upload';
 * UploadPostRequest(file, uploadApi);
 */
export const UploadPostRequest = async (file, api) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
        setTimeout(async () => {
            const request = await fetch(api, {
                method: 'POST',
                body: formData
            });
            const response = await request.json();
            q('#user-msg').innerHTML = 'File uploaded successfully!';
            uploadGif(response.data.id);
        }, 2000);

        q('#user-msg').innerHTML = 'Uploading file...';
    } catch (e) {
        console.log(e.message);
    }
};
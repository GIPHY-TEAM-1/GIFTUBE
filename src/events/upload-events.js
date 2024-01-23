import { uploadGif } from '../data/uploads.js';
import { q } from './helpers.js';

/**
 * Sends a POST request to the specified API endpoint with the provided file data.
 *
 * @function
 * @async
 * @param {File} file - The file data to be uploaded.
 * @param {string} api - The API endpoint for file upload.
 * @returns {Promise<void>} - A promise that resolves after the file is successfully uploaded.
 * @throws {Error} - Throws an error if there is an issue with the fetch request or the file upload.
 *
 * @example
 * try {
 *    await UploadPostRequest(fileData, 'https://example.com/upload');
 * } catch (error) {
 *    console.error('Error during file upload:', error.message);
 * }
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
            uploadGif(response);
        }, 2000);

        q('#user-msg').innerHTML = 'Uploading file...';
    } catch (e) {
        console.log(e.message);
    }
};
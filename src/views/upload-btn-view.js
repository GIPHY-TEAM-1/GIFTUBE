/**
 * Generates the HTML string for the "Upload Gif" button view in GIFtube.
 *
 * @returns {string} - The HTML string representing the content for the "Upload Gif" button view.
 */

export const toUploadBtnView = () => {
    return `
    <div class="upload-btn-view gif-view">
        <h3><strong>GIFTUBE</strong> Upload</h3>
        <div class="upload-btn-container">
            <p>Upload your own gifs to share on <a href="https://giphy.com/">giphy.com</a></p>
            <form id="form-upload">
                <label for="file-input">Choose file</label>
                <input id="file-input" type="file" accept=".gif" />
                <button class="upload-form-button" id="inner-upload-btn">Upload</button>
            </form>
            <p id="user-msg"></p>
        </div>
    </div>
    `;
};

/**
 * Generates HTML markup indicating a successful file upload and renders the upload button view.
 *
 * @function
 * @returns {string} - HTML markup with a success message for file upload.
 * @see toUploadBtnView
 */
export const isSuccessfulUpload = () => {
    return `
    ${toUploadBtnView('File uploaded successfully!')}
`
}

/**
 * Generates HTML markup indicating that no file is attached and renders the upload button view.
 *
 * @function
 * @returns {string} - HTML markup with a message indicating no file is attached.
 * @see toUploadBtnView
 */
export const fileIsNotAttached = () => {
    return `
    ${toUploadBtnView('Please upload a file!')}
`
}

export const waitToUploadFile = () => {
    return `
    ${toUploadBtnView('Uploading file...')}
    `
}
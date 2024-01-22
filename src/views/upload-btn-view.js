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
        </div>
    </div>
    `;
};

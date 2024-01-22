export const toUploadBtnView = () => {
    return `
    <h1>GIFTUBE Upload</h1>
    <p>Upload your collection to share on a <a href="https://giphy.com/">giphy.com</a></p>
    <form id="form-upload">
        <label for="file">File</label>
        <input id="file-input" type="file" accept=".gif" />
        </br></br>
        <button class="upload-button" id="inner-upload-btn">Upload</button>
    </form>
    `
}


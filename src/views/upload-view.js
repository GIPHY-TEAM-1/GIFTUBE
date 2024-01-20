export const toUploadView = () => {
    return `
    <h1>Hello, world!</h1>
    <form id="form-upload">
        <label for="file">File</label>
        <input id="file-input" type="file" accept=".gif" />
        <br> <br>
        <button class="upload-button" id="inner-upload-btn">Upload</button>
    </form>
    `
}


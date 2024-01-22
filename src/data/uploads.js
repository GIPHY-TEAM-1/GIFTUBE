
export let uploads = JSON.parse(localStorage.getItem('uploads')) || [];


export const uploadGif = (response) => {
//   if (uploads.find(id => id === gifId)) {
//     return;
//   };

  uploads.push(response);
  localStorage.setItem('uploads', JSON.stringify(uploads));
};

export const getUploads = () => [...uploads];



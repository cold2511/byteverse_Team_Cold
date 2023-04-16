const imageUpload = document.getElementById('image-upload');
const previewImage = document.getElementById('preview-image');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
    }
    reader.readAsDataURL(file);
});

const uploadForm = document.getElementById('upload-form');
uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add code to handle image upload here
});

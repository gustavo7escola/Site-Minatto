function toggleDescription(photoId) {
    const description = document.getElementById(`desc-${photoId}`);
    description.classList.toggle('visible');
}

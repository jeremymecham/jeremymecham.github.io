function enlargePhoto(event) {
    // Get the clicked photo
    var photo = event.target;

    // Get the source of the clicked photo
    var imgUrl = photo.getAttribute('src');

    // Create a new image element for the enlarged photo
    var enlargedPhoto = document.createElement('img');
    enlargedPhoto.classList.add('enlarged-photo');
    enlargedPhoto.setAttribute('src', imgUrl);

    // Create a container for the enlarged photo
    var container = document.createElement('div');
    container.classList.add('enlarged-photo-container');

    // Add the enlarged photo to the container
    container.appendChild(enlargedPhoto);

    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; // Unicode for '×'

    // Add click event listener to close button
    closeButton.addEventListener('click', function() {
        // Remove the enlarged photo container when close button is clicked
        document.body.removeChild(container);
    });

    // Add the close button to the container
    container.appendChild(closeButton);

    // Append the container to the body
    document.body.appendChild(container);
}

// Add click event listeners to all photos
var photos = document.querySelectorAll('.photo img');
photos.forEach(function(photo) {
    photo.addEventListener('click', enlargePhoto);
});


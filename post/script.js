document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form inputs
        const imageInput = document.getElementById('image');
        const captionInput = document.getElementById('caption');
        const themeSelect = document.getElementById('theme');

        if (!imageInput.files || imageInput.files.length === 0) {
            alert('Please select an image to upload.');
            return;
        }

        if (captionInput.value.trim() === '') {
            alert('Please enter a caption.');
            return;
        }

        if (themeSelect.value === '') {
            alert('Please select a theme.');
            return;
        }

        // Get form data
        const formData = new FormData(postForm);

        // Create a new post element
        const newPost = document.createElement('div');
        newPost.classList.add('post');

        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(imageInput.files[0]); // Set the image source

        // Append image and text content to the new post element
        newPost.appendChild(imgElement);
        newPost.innerHTML += `
            <p>${formData.get('theme')}</p>
            <p>${formData.get('caption')}</p>
        `;

        // Prepend the new post to the postsContainer
        postsContainer.prepend(newPost);

        // Make postsContainer visible
        postsContainer.classList.remove('hidden');

        // Clear the form after submission (optional)
        postForm.reset();
    });
});
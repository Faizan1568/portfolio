document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.experience-card'); // Select all experience cards
    const modal = document.getElementById('imageModal');
    const largeImage = document.getElementById('largeImage');
    const closeModal = document.getElementById('closeModal');

    // Ensure the modal is closed by default
    modal.style.display = 'none';

    cards.forEach(card => {
        card.onclick = function () {
            const thumbnail = card.querySelector('.thumbnail'); // Get the thumbnail from the clicked card
            modal.style.display = 'block';
            largeImage.src = thumbnail.src; // Set the source of the large image
        };
    });

    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal if user clicks anywhere outside of the image
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

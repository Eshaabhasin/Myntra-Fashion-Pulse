document.addEventListener('DOMContentLoaded', () => {
    const voteButtons = document.querySelectorAll('.vote-button');
    const voteCounts = document.querySelectorAll('.vote-count');

    // Function to update the displayed vote count
    const updateVoteCounts = () => {
        const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : {};

        voteCounts.forEach(button => {
            const collectionId = button.getAttribute('data-id');
            button.textContent = (votes[collectionId] || 0) + ' Votes';
        });
    };

    // Initialize vote counts on page load
    updateVoteCounts();

    voteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const collectionId = button.getAttribute('data-id');
            const votes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : {};

            if (votes[collectionId]) {
                votes[collectionId] += 1;
            } else {
                votes[collectionId] = 1;
            }

            localStorage.setItem('votes', JSON.stringify(votes));
            updateVoteCounts();
        });
    });
});

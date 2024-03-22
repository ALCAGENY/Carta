document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope-wrapper');
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });
    }
});

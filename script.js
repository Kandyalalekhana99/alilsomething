let currentCard = 1;

function nextCard(cardNumber) {
    const activeCard = document.getElementById(`card${currentCard}`);
    const targetCard = document.getElementById(`card${cardNumber}`);

    if (activeCard) {
        activeCard.classList.remove('active');
    }

    if (targetCard) {
        targetCard.classList.add('active');
        currentCard = cardNumber;
    }
}

function flipCard() {
    const flipInner = document.getElementById('flipCardInner');

    if (!flipInner.classList.contains('flipped')) {
        flipInner.classList.add('flipped');

        // Trigger full-screen confetti cannons from both sides
        setTimeout(() => {
            // Left side cannon
            confetti({
                particleCount: 100,
                angle: 80,
                spread: 120,
                origin: { x: 0, y: 0.6 },
                colors: ['#ff4081', '#7c4dff', '#ffd700', '#00e676', '#ff7043']
            });

            // Right side cannon
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 120,
                origin: { x: 1, y: 0.6 },
                colors: ['#ff4081', '#7c4dff', '#ffd700', '#00e676', '#ff7043']
            });
        }, 400);
    }
}
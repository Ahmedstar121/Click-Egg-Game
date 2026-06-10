document.addEventListener("DOMContentLoaded", function () {

    const TARGET_CLICKS = 100;

    let currentClicks = 0;
    let gameFinished = false;

    const images = {
        20: "egg-whole.png",
        40: "egg-Crack1.png",
        70: "egg-Crack2.png",
        100: "Egg opened.png",
    };

    const messages = {
        20: "👉 استمر...",
        40: "👍 قريب!",
        70: "🔥 ممتاز!",
        100: "🎉🎊  تهانينا! مبروك ضيعت وقتك 🎊🎉"
    };

    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const gameImage = document.getElementById('gameImage');
    const clicksCountSpan = document.getElementById('clicksCount');
    const progressBar = document.getElementById('progressBar');
    const messageSpan = document.getElementById('message');

    function updateGame() {
        if (gameFinished) return;

        clicksCountSpan.textContent =
            `عدد النقرات: ${currentClicks} / ${TARGET_CLICKS}`;

        progressBar.style.width =
            (currentClicks / TARGET_CLICKS) * 100 + "%";

        if (images[currentClicks]) {
            gameImage.src = images[currentClicks];
        }

        if (messages[currentClicks]) {
            messageSpan.innerHTML = messages[currentClicks];
        }

        if (currentClicks === TARGET_CLICKS) {
            gameFinished = true;

            clickBtn.style.display = "none";
            resetBtn.style.display = "inline-block";

            messageSpan.innerHTML = messages[TARGET_CLICKS];
            messageSpan.style.color = "green";
        }
    }

    function resetGame() {
        currentClicks = 0;
        gameFinished = false;

        clickBtn.style.display = "inline-block";
        resetBtn.style.display = "inline-block";

        gameImage.src = images[20];
        progressBar.style.width = "0%";

        messageSpan.innerHTML = messages[20];
    }

    clickBtn.addEventListener("click", () => {
        currentClicks++;
        updateGame();
    });

    resetBtn.addEventListener("click", resetGame);

});
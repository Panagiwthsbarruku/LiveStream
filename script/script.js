document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const playIcon = document.getElementById("playIcon");
    const radioPlayer = document.getElementById("radioPlayer");

    playButton.addEventListener("click", function (event) {
        event.preventDefault(); // Αποφυγή αλλαγής σε άλλη σελίδα

        if (radioPlayer.paused) {
            radioPlayer.play();
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause"); // Αλλαγή εικονιδίου σε pause
        } else {
            radioPlayer.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play"); // Αλλαγή εικονιδίου σε play
        }
    });
});

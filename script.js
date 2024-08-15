document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const song = document.getElementById('song');
    const heart = document.getElementById('heart');
    const envelope = document.getElementById('envelope');

    playButton.addEventListener('click', function () {
        if (song.paused) {
            song.play();
            playButton.textContent = 'Pause Song';
        } else {
            song.pause();
            playButton.textContent = 'Play Song';
        }
    });

    heart.addEventListener('click', function () {
        envelope.style.display = 'block';
        envelope.style.opacity = 1;
        envelope.querySelector('.envelope-top').style.transform = 'perspective(600px) rotateX(0deg)';
        envelope.querySelector('.envelope-bottom').style.transform = 'perspective(600px) rotateX(0deg)';
        setTimeout(() => {
            alert('"I’m deeply sorry for my mistakes and am committed to earning back your trust with all my heart."');
        }, 500);
    });

    document.addEventListener('click', function (event) {
        if (!envelope.contains(event.target) && !heart.contains(event.target)) {
            envelope.style.opacity = 0;
            envelope.style.display = 'none';
            envelope.querySelector('.envelope-top').style.transform = 'perspective(600px) rotateX(-90deg)';
            envelope.querySelector('.envelope-bottom').style.transform = 'perspective(600px) rotateX(90deg)';
        }
    });
});
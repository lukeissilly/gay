document.getElementById('yesBtn').addEventListener('click', function() {
    const answer = document.getElementById('answer');
    answer.textContent = 'You are gay.';
    answer.style.animation = 'fadeIn 1s forwards';
    document.body.style.backgroundImage = "url('images/gay.webp')";
    document.body.style.backgroundSize = "cover";
});

document.getElementById('noBtn').addEventListener('click', function() {
    const answer = document.getElementById('answer');
    answer.textContent = 'You are not gay.';
    answer.style.animation = 'fadeIn 1s forwards';
    document.body.style.backgroundImage = "url('images/sponge.webp')";
    document.body.style.backgroundSize = "cover";
});
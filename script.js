function nextPage() {
    window.location.href = "yes.html";
}

const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;

    const x = Math.random() * maxX + 20;
    const y = Math.random() * maxY + 20;

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

yesBtn.addEventListener('click', nextPage);

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', function (e) {
    e.preventDefault();
    moveButton();
});

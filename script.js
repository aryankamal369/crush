function calculateLove() {
    const yourName = document.getElementById('yourName').value;
    const crushName = document.getElementById('crushName').value;

    if (yourName && crushName) {
        const compatibility = Math.floor(Math.random() * 101);
        document.getElementById('loveResult').textContent = `${yourName} and ${crushName} are ${compatibility}% compatible!`;
    } else {
        document.getElementById('loveResult').textContent = 'Please enter both names.';
    }
}

document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('hiddenMessage').style.display = 'block';
});

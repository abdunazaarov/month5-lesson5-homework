var userScore = 0;
var compScore = 0;

function compChoice() {
    var rand = Math.floor(Math.random() * 3);
    if (rand === 0) return 'rock';
    if (rand === 1) return 'scissors';
    return 'paper';
}

function play(user) {
    var userDisplay = document.getElementById('user');
    if (user === 'rock') {
        userDisplay.innerHTML = '<b>Tosh</b>'; 
    } else if (user === 'scissors') {
        userDisplay.innerHTML = '<b>Qaychi</b>';
    } else {
        userDisplay.innerHTML = "<b>Qog'oz</b>";
    }

    var comp = compChoice();
    var compDisplay = document.getElementById('comp');
    if (comp === 'rock') {
        compDisplay.innerHTML = '<b>Tosh</b>'; 
    } else if (comp === 'scissors') {
        compDisplay.innerHTML = '<b>Qaychi</b>';
    } else {
        compDisplay.innerHTML = "<b>Qog'oz</b>";
    }

    if (user === comp) {
        document.getElementById('res').textContent = 'Durrang!';
    } else if ((user === 'rock' && comp === 'scissors') ||
                (user === 'scissors' && comp === 'paper') ||
                (user === 'paper' && comp === 'rock')) {
        document.getElementById('res').textContent = 'Siz yutdingiz!';
        userScore++; 
    } else {
        document.getElementById('res').textContent = 'Kompyuter yutdi!';
        compScore++; 
    }

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('compScore').textContent = compScore;
}
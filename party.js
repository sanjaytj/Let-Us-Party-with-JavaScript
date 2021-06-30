function generateRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16); //generates ramdom color hexCode
    var myMusic = new sound("../partyTheme.mp3");
    myMusic.play();
}

function changeBgColor(){
    let colorBg = document.getElementById('color-overlay');
    colorBg.style.backgroundColor = generateRandomColor();
}

function changeBgText(){
    let textBg = document.getElementById('text-bg');
    if(textBg.innerHTML == 'Let Us Party with JS')
        textBg.innerHTML = 'Hit is Hard Buddy';
    else if(textBg.innerHTML == 'Hit is Hard Buddy')
        textBg.innerHTML = 'Rock the party buddy';
    else if(textBg.innerHTML == 'Rock the party buddy')
        textBg.innerHTML = 'Let Us Party with JS';
}

function checkBg(){
    generateRandomColor();
    changeBgColor();
    changeBgText();
}

setInterval(checkBg, 400);

/*

Brazilian Street Fight by Punch Deck | https://soundcloud.com/punch-deck
Music promoted by https://www.chosic.com
Creative Commons Attribution 3.0 Unported License
https://creativecommons.org/licenses/by/3.0/deed.en_US

*/
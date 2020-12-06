function countSentencesLetters(startString){
    var editString = startString.split(/[?.!]/);

    for (var i = 0; i < editString.length; i++) {
        alert(editString[i] + ': Letters quantity is: ' + editString[i].split(/[ ,]/).join('').length);
    }
    return editString
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
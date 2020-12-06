
function vowelsLetter (startString) {

    var editString = startString.toLowerCase().split(''),
        searchString = 'аеёиоуыэюя',
        amount = 0;

    editString.forEach(function (letter) {
        if (searchString.indexOf(letter) !== -1)
            amount++;});

    return amount;
}

var stringToSearch = 'Маша Ела кашу';
alert(vowelsLetter(stringToSearch));

function isPalindrome(word) {
    var wordEnd = word.toLowerCase();
    var j = wordEnd.length - 1;
    for (var i = 0; i < wordEnd.length; i++){
        if (wordEnd[i] !== wordEnd[j]) {
            return false;
        }
        j-- ;
    }
    return true
}

//isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false



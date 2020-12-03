function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

//isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false



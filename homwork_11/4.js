function areAnagrams(wordFirst, wordSecond) {
    var a = wordFirst.toLowerCase().split('').sort().join();
    var b = wordSecond.toLowerCase().split('').sort().join();

    return a === b
}

//areAnagrams('кот', 'отк'); // true
//areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false


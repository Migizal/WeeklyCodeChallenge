/*
Weekly Coding Challenge: Palindrome Given a word, create a function that returns whether or not it's possible to create a palindrome by rearranging the letters in the word.

Examples 

isPalindromePossible("rearcac") ➞ true
// You can make "racecar"
isPalindromePossible("suhbeusheff") ➞ true
// You can make "sfuehbheufs" (not a real word but still a palindrome)
isPalindromePossible("palindrome") ➞ false
// It's impossible


Notes

Trivially, words that are already palindromes return true.	
Words are given in all lowercase.
*/
let NUM_OF_CHARS = 256;

function Palindrome(string){

    let count = Array(NUM_OF_CHARS).fill(0);

    for(let i = 0; i < string.length; i++){
        count[string[i].charCodeAt()]++;
    }

    let odd = 0;
    for(let i = 0; i < NUM_OF_CHARS; i++){
        if((count[i]&1) == 1)
        odd++;

        if(odd > 1)
        return false;
    }
    return true;
}
console.log('Is \'rearcac\' a Palindrome?: '+ Palindrome('rearcac'));
console.log('Is \'suhbeusheff\' a Palindrome?: '+ Palindrome('suhbeusheff'));
console.log('Is \'palindrome\' a Palindrome?: '+ Palindrome('palindrome'));
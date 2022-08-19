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


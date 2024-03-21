function palindromeChecker (text){
    let regex = /[a-z0-9]/gi;
    let used = ((text.toLowerCase()).match(regex)).join('');

    if(used.length === 1)
        return "True";
    else
    {
        
        if(used[0] === used[used.length - 1]){
            return palindromeChecker(used.slice(1, (used.length - 1)));
        }

        return "False";
    }
}

console.log(palindromeChecker("A man, a plan, a canal, Panama!"));
console.log(palindromeChecker("Racecar"));
console.log(palindromeChecker("Hello, World!"));
console.log(palindromeChecker("Was it a car or a cat I saw?"));
console.log(palindromeChecker("12321"));

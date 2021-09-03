function isPangram(sentence){
    sentence = sentence.toLowerCase()
    if(sentence.includes('a') && sentence.includes('b') && sentence.includes('c') && 
    sentence.includes('d') && sentence.includes('e') && sentence.includes('f') && sentence.includes('g') && 
    sentence.includes('h') && sentence.includes('i') && sentence.includes('j') && sentence.includes('k') && 
    sentence.includes('l') && sentence.includes('m') && 
    sentence.includes('n') && sentence.includes('o') && sentence.includes('p') && sentence.includes('q') && 
    sentence.includes('r') && sentence.includes('s') && sentence.includes('t') && sentence.includes('u') && sentence.includes('v') && 
    sentence.includes('w') && sentence.includes('x') && sentence.includes('y') && sentence.includes('z')){
        return true
    }
    else return false
}

console.log(isPangram("this is definitely not a pangram"))

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

//runtime complexity is O(n) since the only variable really is the sentence, 
//and it will check the whole string to verify all 
// if conditions are met. It's ugly but it works so.. 
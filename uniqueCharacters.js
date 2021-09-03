function uniqueChars(str){
    for(let i = 0; i<str.length;i++){
        for(let j = 0; j<str.length;j++){
            if(i!=j){
                if(str[i] === str[j]){
                    return false
                }
            }
        }
    }
    return true
}



console.log(uniqueChars("yolo"))

console.log(uniqueChars("broly"))

console.log(uniqueChars("Bob"))

console.log(uniqueChars("James"))

console.log(uniqueChars("supercalifragilisticexpealidocious"))
//Once again, terrible runtime complexity, will meditate on/research how to avoid the double for loops.